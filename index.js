// cannot be a reserved keyword (let, if, else, var, etc)
// should be meaningful & descriptive 
// cannot start with a #
// cannot contain a space or hyphen
// are case sensitive

// primitive value types
let firstName = 'Sarah'; // string literal
let lastName = 'Smith';
let age = 35; // number literal
let isApproved = true; // boolean literal
let name = undefined; 
let favoriteColor = null;

// object literal
const person = {
    // key value pairs (properties of object)
    name: 'Sarah',
    age: 35
};
// console.log(person);

// dot notation -- default choice over bracket notation
person.name = 'Eric';

// bracket notation
let selection = 'name';
person[selection] = 'Sora';
// console.log(person.name);

// reference type: arrays - data structure used to represent a list of items
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
// console.log(selectedColors); 

// ref types: functions - set of statements that perform tasks or calculates values 
function greet(name, lastName) {
    // body of the function (statements & logic) with a parameter
    // console.log(`Hello ${name} ${lastName}`);
}
// call the function w/arguments
greet('Kairi', 'Smith');

// calculating a value 
function square(number) {
    return number * number;
}

// console.log(square(2));