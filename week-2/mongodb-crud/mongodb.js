// CRUD
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID() // constructor function that generates a new id for us
// console.log(id.id.length) // 12
// console.log(id.toHexString())
// console.log(id.toHexString().length) // 24

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // ///////////////////////////////////////////////////////////////
    // ---> CREATE DATA:

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 31
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops) // ops: an array of documents, in this case only one document
    // })

    //     db.collection('users').insertMany([
    //         {
    //             name: 'Jen',
    //             age: 28
    //         }, {
    //             name: 'Gunther',
    //             age: 27
    //         }
    //     ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert documents')
    //         }

    //         console.log(result.ops)
    //     })

    // Challenge:
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Study',
    //         completed: true
    //     }, {
    //         description: 'Go shopping',
    //         completed: false
    //     }, {
    //         description: 'Clean the house',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert the tasks')
    //     }

    //     console.log(result.ops)
    // })

    // ///////////////////////////////////////////////////////////////////
    // ---> READ DATA:

    // db.collection('users').findOne({ _id: new ObjectID('5ee394a7b9726f2b6484fc18') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fecth')
    //     }

    //     if (!user) {
    //         return console.log('User not found')
    //     }
    //     console.log(user)
    // })  

    // find() returns a cursor and DOES NOT have a callback as an argument. That cursor has methods as toArray() or count()
    // db.collection('users').find({ age: 31 }).toArray((error, users) => {
    //     console.log(users);
    // }) 

    // db.collection('users').find({ age: 31 }).count((error, count) => {
    //     console.log(count);
    // }) 

    // Challenge:
    // db.collection('tasks').findOne({ _id: new ObjectID('5ee395b8769d991998baa0ca') }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     if (!task) {
    //         return console.log('Task not found')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     if (!tasks) {
    //         return console.log('Search without results')
    //     }

    //     console.log(tasks)
    // })

    // //////////////////////////////////////////////////////////
    // ---> UPDATE DATA: updateOne() and updateMany()

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5ee392353086a81dc0c017ec')
    // }, {
    //     $set: { // lo que no pones dentro de $set queda igual
    //         name: 'Mike'
    //     }, 
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // Challenge: updateMany()

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // //////////////////////////////////////////////////////
    // ---> DELETE DATA: deleteOne() ande deleteMany()

    // db.collection('users').deleteMany({
    //     age: 31
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // Challenge:
    // db.collection('tasks').deleteOne({
    //     description: 'Go shopping'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

})
