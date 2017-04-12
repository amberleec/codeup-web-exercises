/**
 * Created by Amberlee on 4/12/17.
 */


"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var response = prompt ("What is your name?");
alert("I like your name, " + response);

// TODO: Show an alert message that welcomes the user based on their input.

alert("Welcome to our page! We are happy to have you!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var confirmed = confirm("Do you like pizza?");

if (confirmed) {
    alert("Awesome! We like pizza too!")
} else{
    alert("Are you okay?")
}
