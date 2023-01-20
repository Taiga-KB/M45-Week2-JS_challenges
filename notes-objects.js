// Objects: objects are containers that can store data and
// functions. We use Key-Value pairs to store the data

const person = {
    age: 32,
    name: "Taiga",
    favSongs: [
        "Heart Shaped Box",
        "Wasting my Time",
        "Down the Rabbit Hole",
        "Ugo",
    ],

    sayHi() {
        return `Hello, my name is ${this.name}`
    },
};

console.log(person.sayHi());

let offer = "none"
let time = "1700"

// Function inside object

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Decaf",
        "Filter",
        "Hot Chocolate",
    ],

    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with sandwich",
    noOffer: "No offer at this time",

        openCafe() {
            if (this.hasSpecialOffers) {
                return "Time for special offer!";
            }
        },

        closedCafe() {
            return "We are closed come back tomorrow!";
        }
};

// Statements inside object

console.log(cafe.closedCafe());

let day = "Monday"

let alarm = {
    weekEnd: "No alarm",
    weekDay: "Alarm set",

};

    if(day == "Monday" && "Tuesday" && "Wednesday" && "Thursday" && "Friday") {
        console.log(alarm.weekDay);

    } else if(day == "Sunday" && "Saturday") {
        console.log(alarm.weekEnd);
}

