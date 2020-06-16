// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([7, 4, 1])
//         reject('Things went wrong!')
//     }, 2000)
// })

// // then() allows us to register a function to run when things go well, so when resolve is called
// // catch() allows us to register a function to run when things go wrong, so when reject is called
// doWorkPromise.then((result) => {
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// Benefits over callbacks:
// With promises is easier to understand the intention of the code
// because we have 2 separate functions we call and taht makes it easier to just parse this code and figure out waht's going on.
// Also, having that two separate function makes it easy to not mess things up, because we can call either resolve or reject, we 
// can't call both and we can't call one of them twice. When one of them is called the promise is done and it's state can't change. 
// There is nothing built into the callback pattern to prevent that.
// With callback pattern, we just have these single function wich means we need to look at all calls to callback and then figure out
// wich of the two arguments was provided, which is more error prone and easier to run into issues with.
// With promises we have two separate methods for consuming the promise, and only one will ever run


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// Promise Chaining with bad syntax:
// add(1, 2).then((sum) => {
//     console.log(sum)
//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// Promise chaining with better syntax (not nested):
add(1, 2).then((sum) => {
    console.log(sum)
    return add(sum, 5) // the first then() returns a promise
}).then((sum2) => { // when that returned promise is fullfiled, that then() runs with the result of that second promise
    console.log(sum2)
}).catch((e) => { // only one catch
    console.log(e)
})