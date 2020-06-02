// Function constructor

/* let john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}; */

/* let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';


let john = new Person('John', 1990, 'teacher'); // it is called instantiation
let jane = new Person('Jane', 1969, 'designer')
let mark = new Person('Mark', 1948, 'retired')

john.calculateAge()
jane.calculateAge()
mark.calculateAge()

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName); */

// Object.create
/* let personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

let john = Object.create(personProto)
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

let jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
}) */

// Primitives vs. Objects

// Primitives
let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);

/* 
// Objects
let obj1 = {
    name: 'John',
    age: 26
}

let obj2 = obj1; // obj1 and obj2 variables both hold a reference that points to the same object in memory
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// Functions
let age = 27;
let obj = {
    name: 'Juan',
    city: 'Tandil'
};
function change(a,b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);
console.log(age); // 27
console.log(obj.city); // San Francisco 
*/

// When we pass a primitive into the functiona simple copy is created, so we can change "a" as much as we want, it will never affect
// the variable on the outside, because it is a primitive.
// But when we pass an object, its not really the object that we pass but the reference to the object, so if we change the object 
// inside of the function  it is still reflected outside of the function

// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
*/


// Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/




// IIFE (Inmediately Invoked Function Expressions)
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/













