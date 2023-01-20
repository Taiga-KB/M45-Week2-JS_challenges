let age = 66;

if(age < 18 ) {
    console.log(`Price is £8`)
}

else if(age > 18 && age <60) {
    console.log(`Price is £10.95`)
}

else {
    console.log(`Price is £7.50`)
}

// Functions! To make code as reusable as possible

let cofeeisGrinding = false;

const pressGrindBeans = () => {
    if(cofeeisGrinding) {
    console.log("Stopping the grind");
    cofeeisGrinding - false;
    }else {
        console.log("Grinding is about to begin");
        cofeeisGrinding - true;
    }
}

pressGrindBeans();
// ^ The function acts like a 'button' to run the code.
// // ----------

let favColor = (color) => {

    console.log(`My favourite color is ${color}`);

}

favColor("Blue");
favColor("Red");
favColor("Purple");


// // Parameters             v These are parameters, act like variables just inside the function

let accNumber = 1954768
const cashWithdrawal = (amount, accnum) => {

    console.log(`Withdrawing £${amount} from account ${accnum}`);

}

// // //             v These are arguments. Specific pieces of information we give the function
cashWithdrawal(300, 8720585);
cashWithdrawal(50, 5868393);
cashWithdrawal(70, accNumber);

// // // Variables can be used ^ in the function

const addUp = (num1, num2) => {
    return num1 + num2;
}

// // This value is hidden because of the return
addUp(7 , 3); 

console.log(addUp(2 , 5));

// Possible to run a function inside another function

const multiplyByNineFifths = (celcius) => {
    return celcius * (9/5);
}

const getFahrenheit = (celcius) => {
    return multiplyByNineFifths(celcius) +32
}

console.log("The Temperature is " + getFahrenheit(15) + "F");
