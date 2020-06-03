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
/* let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);
 */
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

// Closures
/* 
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    var actual = 2020
    return function(yearOfBirth) {
        var age = actual - yearOfBirth;
        console.log((retirementAge - age) + a );
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

retirement(66)(1990);


function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John'); */

// Lecture: Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


// Another cool example
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

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

// CHALLENGE:

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) 
(Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as 
you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private 
and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/* (function () {
    function Question(id, question, answers, correctAnswer) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    } 
    
    Question.prototype.logQuestion = function() {
        console.log(this.id + '. ' + this.question)
        for(let i=0; i < this.answers.length; i++) {
            console.log(i + '. ' + this.answers[i]);
        }
    }
    
    Question.prototype.logResult = function(chosenNumber) {
        if(chosenNumber === this.correctAnswer) {
            console.log('Correct Answer!');
            
        } else {
            console.log('Wrong answer. Try Again');
        }
    }
    
    Question.prototype.logScore = function(score) {
        console.log('Your current score: ' + score);
    }
    
    let q1 = new Question(1, 'What is my name?', ['Pedro', 'Juan', 'Lucas'], 1)
    let q2 = new Question(2, 'Where do I live?', ['Tandil', 'Boston', 'San Francisco'], 0)
    let q3 = new Question(3, 'What is the course about?', ['Java', 'Python', 'JavaScript'], 2)
    
    let questions = [q1, q2, q3];
    
    randomQ = Math.floor(Math.random() * questions.length);
    
    questions[randomQ].logQuestion();
        
    let chosenInput = parseInt(prompt('Please select the correct answer (just type the number). Or type exit to quit'));

    questions[randomQ].logResult(chosenInput);
})() 
*/

// --> expert level
(function () {
    function Question(id, question, answers, correctAnswer) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    } 
    
    Question.prototype.logQuestion = function() {
        console.log(this.id + '. ' + this.question)
        for(let i=0; i < this.answers.length; i++) {
            console.log(i + '. ' + this.answers[i]);
        }
    }
    
    Question.prototype.logResult = function(chosenNumber, callback) {
        let sc;

        if(chosenNumber === this.correctAnswer) {
            console.log('Correct Answer!');
            sc = callback(true)
        } else {
            console.log('Wrong answer. Try Again');
            sc = callback(false);
        }
        this.logScore(sc)
    }
    
    Question.prototype.logScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------');
    }
    
    let q1 = new Question(1, 'What is my name?', ['Pedro', 'Juan', 'Lucas'], 1)
    let q2 = new Question(2, 'Where do I live?', ['Tandil', 'Boston', 'San Francisco'], 0)
    let q3 = new Question(3, 'What is the course about?', ['Java', 'Python', 'JavaScript'], 2)
    
    let questions = [q1, q2, q3];

    function score() {
        let score = 0;
        return function(correct) {
            if(correct) {
                score++;
            }
            return score
        }
    }

    let keepScore = score();

    function next() {
              
        randomQ = Math.floor(Math.random() * questions.length);
        
        questions[randomQ].logQuestion();
            
        let chosenInput = prompt('Please select the correct answer (just type the number). Or type exit to quit');
    
        if(chosenInput !== 'exit') {

            questions[randomQ].logResult(parseInt(chosenInput), keepScore);
            next()
        }
    }

    next()
})()


















