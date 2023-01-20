// ----------Activity 1----------

let name = 'Balthazar';
let age = 1587;
let color = 'Fire Truck Red'

console.log(`Hello, my name is ${name}. I am ${age} years old, and my favourite color is ${color}.`);

name = 'Timothy Shwindle';
age = 67;
color = 'whatever the color petrol is';

console.log(`Hello, my name is ${name}. I am ${age} years old, and my favourite color is ${color}.`);

// ----------Activity 2----------

let breakfast = "Coffee";
let lunch = "chicken tepenyaki";
let dinner = "more chicken, I crave protein";

console.log(`For breakfast, I had ${breakfast}, followed by ${lunch} and then for dinner I will eat ${dinner}.`);

breakfast = "Tea";
lunch = "a nice round of buttery toast";
dinner = "chilli";

console.log(`For tomorrow's breakfast I will have ${breakfast}, then ${lunch}. For dinner I will likely have ${dinner}.`);

// ----------Activity 3----------

const oneDay = 24 * 60 * 60 * 1000;
const today = new Date();
const birthday = new Date("2023, 10, 27");

const daysTilBirthday = Math.round((Math.abs(today - birthday) / oneDay));

console.log(daysTilBirthday);

// ----------Activity 4----------

let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "o";
let space6 = "o";
let space7 = " ";
let space8 = "x";
let space9 = " ";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");
