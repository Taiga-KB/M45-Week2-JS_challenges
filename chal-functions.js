// ----------Activity 1----------

factorial = (n) => {
    if((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n + factorial(n-1));
    }
} 

console.log(factorial(33));

// ----------Activity 2----------

let orderCount = 2;

const takeOrder = (size , topping) => {
    console.log(`${size} pizza with ${topping}`);
    orderCount++;
    console.log(`Order: ${orderCount}`)
}

takeOrder("large" , "pineapple");

// ----------Activity 3----------

let accNum = 95757
let pin = 4987;
let balance = 5000;

const cashDispense = (amount, accNum) => {

    if(pin == 4987 && balance > amount) {

        console.log(`Withdrawing ${amount} from acc: ${accNum}`)

    }

    if(pin != 4987) {

        console.log("Pin is incorrect")

    } else if(balance < amount) {

        console.log("Exceeds limit")
    }
// First checks if the pin is correct and the amount does not exceed the balance.
// If either is false, will run through the other conditions
}

cashDispense(6000, accNum)