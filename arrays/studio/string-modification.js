const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let firstThree = str.slice(0,3)
console.log(firstThree);
let lastThree = str.slice(3)
console.log(lastThree);
let final = (lastThree + firstThree)
console.log(final)

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`"The Original word " ${str} "has been scrambled to " ${final}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numLetters = input.question("How many letters would you like to move?") 

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.


if (numLetters - str.length >= 1) {
    console.log(`Error: Too many letter Guess again!`);
    console.log(`probelm too many charactesr \n ${final}`);
} else if (numLetters - str.length < 0) {
     let numbersMove1 = str.slice (0, numLetters);
     let numbersMove2 = str.slice (numLetters);
    console.log("Too Few Guess Again?");
    console.log(`${numbersMove1 +numbersMove2}`);
} else if (numLetters - str.length == 0) {
    console.log("Congradulations! You got it right.");
} else {
    console.log(`Wrong ammount entered`);
}

