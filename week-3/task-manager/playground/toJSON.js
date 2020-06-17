const pet = {
    name: 'Hal'
}

pet.toJSON = function () {
    return {}
}

console.log(JSON.stringify(pet)) // {}

// When we use res.send(obj), JSON.stringify(obj) is called behind the scenes, so we can set up a toJSON method to manipulate the 
// object sending back with just the properties we want to expose 