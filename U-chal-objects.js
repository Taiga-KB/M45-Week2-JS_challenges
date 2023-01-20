// ----------Activity 1----------

// const person = {
//     age: 32,
//     name: "Taiga",
//     favSongs: [
//         "Heart Shaped Box",
//         "Wasting my Time",
//         "Down the Rabbit Hole",
//         "Ugo",
//     ],

//     sayHi() {
//         return `Hello, my name is ${this.name}`
//     },
// };

// console.log(person.sayHi());

// ----------Activity 2----------

// const pet = {
//     name: "Kiri",
//     typeOfPet: "Cat",
//     age: "7",
//     color: "Lynx",

//     eat() {
//         return `${this.name} is eating.`
//     },

//     drink() {
//         return `${this.name} is drinking.`
//     }
// };

// console.log(pet.drink());

// ----------Activity 3---------- UNFINISHED

const coffeeShop = {
    branch: "Mexico",
    drinks: [
        "Tea: 1.20",
        "Coffee: 1.70",
        "Soda: 2.00",
        "Fruit juice: 1.40",
        "Water: 1.00",
    ],
    food: [
        "Bacon batch: 2.00",
        "Bacon & Egg batch: 3.00",
        "Bacon & Sausage & Egg batch: 4.00",
        "Porridge: 2.50",
        "Doorstop Toast: 1.50",
    ],

    drinksOrdered() {
        return `Your order is ${this.drinks[0]}`
    }

}

console.log(coffeeShop.drinksOrdered());