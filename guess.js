#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWellcome to the CodeWithAliya - CLI Number Guessing Game\n ");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answer.serGuessedNumber === randomNumber) {
    console.log("Congratulations! You guess a correct number");
}
else {
    console.log("Sorry, You guess a wrong number");
}