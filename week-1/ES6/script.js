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

/*
function Person(name) {
    this.name = name;
}

// ES5
 
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
    // se podria hacer var self = this y return self.name + ......
       return this.name + ' is friends with ' + el;
    }.bind(this)); // create a copy of the function with a manually-defined this keyword

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
// Best solution:
let friends = ['Bob', 'Jane', 'Mark'];

Person.prototype.myFriends6 = function(friends) {

    let arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('Mike').myFriends6(friends); 
 */



// -----------------------------------------------------------
// DESTRUCTURING

// ES5
/* 
var john = ['John', 26];
var name = john[0];
var age = john[1]; 
*/


// ES6
/* 
const [name, age] = ['John', 26]
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}
// con objetos las variables tienen que llamarse igual que las keys del objeto
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// Si queres que no coincida el nombre de la variable con las keys del objeto:
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(yearOfBirth) {
    const age = new Date().getFullYear() - yearOfBirth;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement)
 */



//  ----------------------------------------------------------------
// ARRAYS

// const boxes = document.querySelectorAll('.box');

// ES5
/* 
var boxesArray5 = Array.prototype.slice.call(boxes);
boxesArray5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue'
})
*/

//  ES6
/* 
const boxesArray6 = Array.from(boxes)
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/

// si queres hacer breaks o continue dentro del loop, el foreach y el map no sirven, entonces:

// ES5
/* for(var i=0; i < boxesArray5.length; i++) {
    if(boxesArray5[i].className === 'box blue') {
        continue; // si se da la condicion, el loop pasa directamente al elemento siguiente sin hacer nada con este elemento
        // break; // el loop se frena y no continua más
    }

    boxesArray5[i].textContent = 'I changed to blue!'
}
 */
/* 
// ES6
for(const cur of boxesArray6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!'
}

// buscar elementos en un array:

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
})
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
console.log(ages.findIndex(cur => cur >= 18)); // retorna el indice del primer elemento que cumple la condicion
console.log(ages.find(cur => cur >= 18)); // retorna el primer elemento que cumple la condicion 
 */




// -----------------------------------------------------------------
// SPREAD OPERATOR (...)
/* 
function addFourAges (a, b, c, d) {
    return a + b + c + d
}

var sum1 = addFourAges(18, 30, 12, 21)
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); 

// apply method take this array and then call the function using the elements 
// of the array as the arguments. The first argument of the method we specify the this variable, in this case doesnt matter so can be null

console.log(sum2)

// ES6
const sum3 = addFourAges(...ages) // the ... expands this array into it's components
console.log(sum3)

// Joining two arrays:

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// use case con nodes:
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes]; // la constante all no es un array ya haciendo esto??

Array.from(all).forEach(cur => cur.style.color = 'purple');
 */

// --------------------------------------------------------------
// REST PARAMETERS
// recieve a couple of single values and transforms them into an array when we call a function with multiple parameters

/* 
// ES5
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18)
    })
}
// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
} // cuando llamas a la funcion el operador transforma los argumentos en un array y los pasa a la funcion

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987)
 */
// DIFFERENCE BETWEEN SPREAD OPRATOR AND REST PARAMETERS:
// Is actually the place in wic we use each of them:
// The Spread operator is used in the function call while the rest operator is used in the function declaration

// ES5
/* 
function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1); // at position 1 it will start to copy to an  array
    console.log(argsArr)

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit)
    })
}
isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);
 */

// ES6
/* 
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
} // cuando llamas a la funcion el operador transforma los argumentos en un array y los pasa a la funcion

isFullAge6(21, 1990, 1999, 1965);
isFullAge6(16, 1990, 1999, 1965, 2016, 1987)
*/

// -------------------------------------------------------------
// DEFAULT PARAMETERS

// ES5
/* 
function SmithPerson (firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName
    nationality === undefined ? nationality = 'american' : nationality = nationality

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
 */
// ES6

/* 
function SmithPerson (firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1900)
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

 */


// -----------------------------------------------------------------
// MAPS
/* A map is a new key-value data structure in ES6. 
In maps, we can use anything for the keys. So in objects we are limited to strings, but in maps we can use any kind 
of primitive value, even functions or objects for keys
*/

// const question = new Map();
// question.set('question', 'What is the official name of latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong, please try again!')

// console.log(question.get('question'));
// console.log(question.size)

// if (question.has(4)) {
//     // question.delete(4);
//     console.log('Answer 4  is here')
// }

// question.clear();

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// for (let [key, value] of question.entries()) {
//     if(typeof(key) === 'number') {
//         console.log(`Answer ${key}: ${value}`)
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

// SUMMARY WHY MAPS ARE BETTER THAN OBJECTS TO CREATE HASH MAPS:
// 1. we can use anything as keys, as open a lot of possibilities
// 2. maps are iterable, and making it very easy to loop through them and to manupilate data with them
// 3. it's easy to get the size of a map using the size property
// 4. we can easily add and remove data from a map



// ------------------------------------------------------------------------------------------
// CLASSES

// ES5
/* var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age)
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age)
    }

    static greeting() {
        console.log('Hey there!');
    }

}

let john6 = new Person6('John', 1990, 'teacher');

// static methods: are methods that are simply attached to the class, but not inherited by the class instances, so by objects that we create through that class.

Person6.greeting();
 */
// Tips:
/*  
First, the class definitions are not hoisted, so unlike function constructors, we need to first implement a class, and only later 
in our code we can start using it. 
And second, we can only add methods to classes, but not properties.
But that's not a problem at all, because inheriting properties through the object instances is not a best practice anyway. 
*/

// -----------------------------------------------------------------------------
// CLASSES AND SUBCLASSES

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age)
}

var Athlete5 = function(name, yearOfBirth, job, olimpicGames, medals) {
    Person5.call(this, name, yearOfBirth, job)
    this.olimpicGames = olimpicGames;
    this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype) // now the 2 function constructors are connected

Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals)
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age)
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olimpicGames, medals) {
        super(name, yearOfBirth, job);
        this.olimpicGames = olimpicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++
        console.log(this.medals)
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();























