#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 8 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 8-1:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congtratulation! you guessed right number.");
}
else {
    console.log("you guessed  wrong number");
}
