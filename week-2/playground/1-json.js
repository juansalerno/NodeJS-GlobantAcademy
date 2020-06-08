const fs = require('fs');
/* 
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryhan Holiday'
}

const bookJSON = JSON.stringify(book); // convert an object to JSON string

console.log(bookJSON);

const parsedData = JSON.parse(bookJSON); // convert JSON string to an object
console.log(parsedData.author) 


fs.writeFileSync('1-json.json', bookJSON); 
*/

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);


const dataBuffer = fs.readFileSync('1-json.json');
const JSONdata = dataBuffer.toString();
const user = JSON.parse(JSONdata)
user.name = 'Juan Ignacio'
user.age = 31
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);






