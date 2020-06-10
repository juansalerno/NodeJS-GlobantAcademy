const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}

greeter('Juan') // Hello Juan

greeter() // Hello user