/**
 * Created by Amberlee on 4/12/17.
 */


(function(){
"use strict";



var myNameIs = 'Bob'; // TODO: Fill in your name here.

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
var myNameIs="Amberlee";
/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */
function sayHello(Amberlee) {
    console.log("Hello from" + Amberlee)
}
// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random()*100)+1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 */
function isOdd(number) {
    var message = (number % 2) ? "This number is odd." ; "This number is even.";
    console.log(message);
}
/**
 * TODO:
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */
isOdd(random)
var random = Math.floor(Math.random()*100)+1;

}