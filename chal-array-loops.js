// // ------------Arrays------------
// // ----------Activity 1----------

let favSongs = [
    "1 Mr Fear - SIAMES",
    "2 Ghost Page - Red Vox",
    "3 My Time - bo en",
    
];

favSongs.push("4 ULTRAnumb - Blue Stahli", "5 Muse - Hysteria");

favSongs.splice(3,1);
console.log(favSongs)

// // ----------Activity 2----------
// Needs expanding maybe

let locations = [
    "1 UK",
    "2 Scotland",
    "3 Wales",
    
];

locations.splice(2, 0, "lemon" , "Kiwi");
console.log(locations);

// // ------------Loops------------
// // ----------Activity 1----------

let favFilms = [
    "1 Kung-Pow! Enter the Fist",
    "2 Soul",
    "3 Kate",
    "4 Spirited Away",
    "5 The Raid",
];

favFilms.push("6 Megamind" , "7 Ghost in the Shell 1 & 2");

let bestFilm = "Ghost in the Shell 1 & 2";

while(bestFilm != "3 Kate") {
    console.log(bestFilm);
    bestFilm = favFilms[Math.floor(Math.random() * 7)];
}

console.log(bestFilm);

// ----------Activity 2----------

let ranNum = 
    Math.floor(Math.random() * 50);

// Updating the variable value inside the loop is one way of doing this
// epsecially if the varible ranNum is used elsewhere

for(let i = 0; i <6; i++) {
    ranNum = Math.floor(Math.random() * 50); 
    console.log(ranNum)
    // console.log(Math.floor(Math.random() * 50));
//  ^Best way of doing this within the loop
}

// ----------Activity 3----------

for(i = 10; i > 0; i--) {
    console.log(i)
};

// ----------Activity 4----------

let films = [
    "idontknow",
    "whoknows",
    "swindlyjingle",
    "likewhateverman",
    "Dreams of Cheese 2: The reckoning",
];

for(let i = 0; i < 1; i++) {
    console.log(films)
};

    if(films[2] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters!")
    } else {
        console.log("Boo! We want Ghostbusters for some reason!")
};

// ----------Activity 5---------- UNFINISHED

let num = (Math.floor(Math.random() * (30 - 1))); Legacy

for(let i = 0; i <6; i++) {
    num = (Math.floor(Math.random() * (30 - 1)+ 1));
    // console.log(Math.floor(Math.random() * (30 - 1))) To test if initial math worked

    if(num % 7 == 0) {
        console.log(`${num} is divisible by 7`)
    } else {
        console.log(`${num} is NOT divisible by 7`)
    }
}
// ----------Activity 6----------



// ----------Activity 7----------