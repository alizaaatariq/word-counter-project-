// import inquirer command line 
import inquirer from "inquirer";
// declare a const 
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word ",
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
//print the word count
console.log(`your word count is ${words.length}`);
