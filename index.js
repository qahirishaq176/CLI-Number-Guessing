#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
