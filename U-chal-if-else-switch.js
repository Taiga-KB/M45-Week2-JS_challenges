// ----------Activity 1----------

let age = 16;
let country = "Germany"

if(age > 17 && country == "UK") {
    console.log(`You're ${age}? Yes I can serve you.`)
}

if(age < 17 && country == "UK") {
    console.log(`You're ${age}? You aren't old enough.`)
}

else if (country != "UK") {
    console.log(`You're from ${country}? I'm not sure if I can serve you.`)
}

// ----------Activity 2----------

let topping = "BBQ Chicken"

switch(topping) {
    case "Bell Pepper":
    case "Cheese":
        console.log("These are important ingredients for my pizza.");
        break;
    case "Onion":
    case "BBQ Chicken":
        console.log("I'm okay with this on my pizza.")
        break;
    case "Pineapple":
    case "Sweetcorn":
        console.log(`This ${topping} should not be on pizza`)

}

// ----------Activity 3----------

let password = "fluffington";
let num = 7;

if(password.length < 8) {
    console.log("This password is too short. Must be minimum 8 characters")

}

if(password.length > 8) {
    console.log("Password accepted.")
}

if(num%5 === 0) {
    console.log("This number is divisible by 2")
}

else {
    console.log("This number is not divisible by 2");
}

// ----------Activity 4----------

let num2 = 13

switch (true) {
case num2%3 === 0 && num2%5 === 0:
    console.log("Fizz Buzz")
    break;

case num2%3 === 0:
    console.log("Fizz")
    break;

case num2%5 === 0:
    console.log("Buzz")
    break;

default: 
    console.log(num2)

}

// ----------Activity 5----------



// ----------Activity 6----------

let time = 8.00
let placeOfWork = "Office"
let townOfHome = "Batcave"

if(time <= 7.00) {
    console.log("At Home")
}

if(time >= 7.00, time <= 9.00) {
    console.log("Commuting")
}

if(time >= 9.00) {
    console.log("At work")
}

// ----------Activity 7----------


// ----------Activity 8----------


// ----------Activity 9----------