const socket = io()

const $dropdown = document.querySelector('#active')
const $messageFormInput = document.querySelector('.room-input')
const activeRoomsDropdownTemplate = document.querySelector('#activeRooms-dropdown-template').innerHTML
const $activeRoomsList = document.querySelector('#activeRooms-list')

socket.on('activeRooms', (rooms) => {
   
    let html = `
    <select id="active"> 
    <option value="" disabled selected> Active Rooms </option>  
    </select>
    `
    if (rooms.length > 0) {
        html = Mustache.render(activeRoomsDropdownTemplate, {
            rooms
        })
        
        $activeRoomsList.innerHTML = html

    } else {
        $activeRoomsList.innerHTML = html
    }
})

$activeRoomsList.addEventListener('change', (e) => {
    let element = e.target
    element.addEventListener('click', (ev) => {
        $messageFormInput.value = ev.target.value
    })
})