const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage, generateLocationMessage } = require('./utils/messages')
const { addUser, removeUser, getUser, getUsersInRoom, getUserByName } = require('./utils/users')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')


app.use(express.static(publicDirectoryPath))

const activeRooms = []

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    io.emit('activeRooms', activeRooms)

    socket.on('join', (options, callback) => {
        const { error, user } = addUser({ id: socket.id, ...options })

        if (error) {
            return callback(error)
        }

        socket.join(user.room)   

        const newRoom = activeRooms.every(room => room !== user.room)
        
        if (newRoom) {
            activeRooms.push(user.room)
            io.emit('activeRooms', activeRooms)
        } 

        socket.emit('message', generateMessage('Admin', `Welcome! `))
        socket.emit('message', generateMessage('Admin', `You can send a private message to any user in the room typing @ plus the user name. Example: @username Hello!`))

        socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined!`)) 
        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        })

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        const filter = new Filter()
        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        if (message.startsWith('@')) {
            const index = message.indexOf(' ')
            const userDestName = message.substring(1, index)
            
            const userDest = getUserByName(userDestName)
            if (!userDest) {
                return callback('That user  is not in the room')
            }
            
            const msg = message.substring(index + 1)
            
            io.to(socket.id).emit('message', generateMessage(user.username, message))
            io.to(userDest.id).emit('message', generateMessage(user.username, msg))
            return callback()
        }

        io.to(user.room).emit('message', generateMessage(user.username, message)) 
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)

        if (user) {
            const index = activeRooms.findIndex(room => room === user.room)

            if (getUsersInRoom(activeRooms[index]).length <= 0) {
                activeRooms.splice(index, 1)
                io.emit('activeRooms', activeRooms)
            }

            io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left!`)) 
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUsersInRoom(user.room)
            })
        }
    })   
})

server.listen(port, () => {
    console.log(`Server is on port ${port}`)
})