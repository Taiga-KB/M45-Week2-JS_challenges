
// .push() method adds an item to the array
// .splice() method removes a specified item in the list
// .slice(} method returns selected elements in an array, as a new array
// .pop() method only removes the last item in the array
// .unshift() method adds new elements to the beginning of an array
// .shift() method removes the first elements in an array
// .map()
// .length displays total list items in an array

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new",

];

coffeeOrder.splice(1 , 1);
console.log(coffeeOrder)


// Iteration (loops)
// i stands for index

let favDrinks = [
    "1 Coffee",
    "2 Apple n' Blackcurrant",
    "3 Tea",
];

console.log(favDrinks[0]);
console.log(favDrinks[1]);
console.log(favDrinks[2]);

for(let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i]);

}

let multiplesTwo = [];

for(let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// While loops. while (condition)

let age = 15;

while( age < 19) {
    console.log("You're a child");
    age++;
// The while loops will run until will meet the number 18 and meet the condition

}

console.log("You're an adult");