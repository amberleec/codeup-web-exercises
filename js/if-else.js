/**
 * Created by Amberlee on 4/10/17.
 */

//1
"use strict";

var gradeAverage = (70 + 80 + 95) / 3

if (gradeAverage > 80) {
    console.log("You're Awesome!");
} else {
    console.log("You need more practice");
}



//2

var Cameron = 180;
var Ryan = 250;
var George = 320;

var discount = 0.35;

if (Cameron >= 200) {
    console.log("Cameron spent" + Cameron + "Total after discount $" + Cameron * discount);
} else {
    console.log("You did not spend enough");
}
if (Ryan >= 200) {
    console.log("Ryan spent" + Ryan + "Total after discount $" + Ryan * discount);
} else {
    console.log("You did not spend enough");
}
if (George >= 200) {
    console.log("George spent" + George + "Total after discount $" + George * discount);
} else {
    console.log("You did not spend enough");
}

///3

var flipACoin = Math.floor(Math.random()* 2)

var advice = (flipACoin) ? console.log("Buy a car") : console.log("Buy a new house");