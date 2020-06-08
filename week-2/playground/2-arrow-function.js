// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = x => x * x

// console.log(square(3));

const event = {
    name: 'Bithday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() { //ES6 method definition syntax
        console.log('Guest list for ' + this.name)

        this.guestList.forEach(guest => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

// Arrow functions dont bind their own "this" value, they acces the "this" value in the context in wich they are created.
// That makes them poor candidates for methods, ad it makes them great candidates for pretty much everything else

event.printGuestList()