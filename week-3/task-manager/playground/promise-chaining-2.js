require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ee3e880f58eda3510be7a7f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ee7f0c90912b523c86ede07').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})