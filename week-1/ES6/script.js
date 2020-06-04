// LET AND CONST

// ES5
/* var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller'
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); // error
 */
// Variables declared with var are function-scoped
// Variables declared with let are block-scoped
// Example:
/* 
// ES5
function driversLicense5(passedTest) {
    if(passedTest) {
        console.log(firstName); // undefined, because in the Execution context all the variables are hoisted and set to undefined
    
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is allowed to drive a car'); // se puede acceder a las variables por estar 
    // dentro de la misma funcion, porque en var la funcion es el scope. No se podria acceder desde fuera de la funcion 
}

driversLicense5(true)

// ES6
function driversLicense6(passedTest) {
    if(passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
    }
    // no longer have acces to the variables created inside of a block (en este caso el block es el if)
    console.log(firstName + ', born in ' + yearOfBirth + ' is allowed to drive a car'); // no toma las variables como declaradas porque
    // estan dentro del scope del if y el console.log esta fuera del scope.
}

// driversLicense6(true) // error

// solucion para corregir el error:

function driversLicense6(passedTest) {
    // console.log(firstName); // error: firstName is not defined. 
    // cannot use a variable before they are declared. This way prevent some errors 
    let firstName;
    const yearOfBirth = 1990;
    if(passedTest) {
        firstName = 'John';
    }
    // no longer have acces to the variables created inside of a block (en este caso el block es el if)
    console.log(firstName + ', born in ' + yearOfBirth + ' is allowed to drive a car'); // no toma las variables como declaradas porque
    // estan dentro del scope del if y el console.log esta fuera del scope.
}

driversLicense6(true)

// Examle:

let i = 23;

for(let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
 */



// ---------------------------------------------------------------
// BLOCKS AND IIFEs
// ES5
/* 
(function() {
    var c = 23;
})();

// console.log(c); // error

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
// console.log(a + b); // error
console.log(c); // 3 
*/



// ---------------------------------------------------------
// STRINGS
/* 
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + 
yearOfBirth + '. He is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 -> literal templates
// para hacer ` en el teclado: alt + 96 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. He is ${calcAge(yearOfBirth)} years old.`)


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j')); // false
console.log(n.startsWith('J')); // true
console.log(n.endsWith('th')); // true
console.log(n.includes('oh')); // true
console.log(`${firstName} `.repeat(5)); // John John John John John 
 */



// -----------------------------------------------
// ARROW FUNCTIONS
/* 
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
    return 2016 - el;
});
console.log(ages5)

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`)
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
})
console.log(ages6);
 */

// --------------------------------------------------
// ARROW FUNCTIONS: LEXICAL "THIS" KEYWORD
// They share the surrounding this keyword. Unlike normal functions, arrow dont get their own this keyword, they simply use 
// the this keyword of the function they are written in. So we say that they have a lexical this variable.
/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       
        var self = this; // hack to acces to "this" inside the callback function
       
        document.querySelector('.green').addEventListener('click', function() {
        var str = 'This is box number ' + self.position + ' and it is ' + self.color;
        alert(str);
        });
    }
}
//box5.clickMe();

*/
// ES6
/* const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();
 */
// Using ES6, ther best practice is to always use arrow functions when you need to preserve the value of the this keyword, as we did
// in the previous example

/* 
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();
 */

function Person(name) {
    this.name = name;
}

// ES5
/* 
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
    // se podria hacer var self = this y return self.name + ......
       return this.name + ' is friends with ' + el;
    }.bind(this)); // create a copy of the function with a manually-defined this keyword

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
 */

// ES6
// Best solution:
let friends = ['Bob', 'Jane', 'Mark'];

Person.prototype.myFriends6 = function(friends) {

    let arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('Mike').myFriends6(friends); 
























