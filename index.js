// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    { 
        type: "input", 
        name: "title", 
        message: "What is the name of the project?" 
    },
    { 
        type: "input",
        name: "description", 
        message: "Description of the project:" },
    {
        type: "input",
        name: "installation",
        message: "Describe how to install the project(if applicable):",
    },
    { 
        type: "input", 
        name: "usage", 
        message: "What is the project usage for?" 
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors to the project(if applicable)?",
    },
    { 
        type: "input", 
        name: "test", 
        message: "Are there any tests included?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for the project:",
        choices: ["Apache", "GNU", "MIT", "Mozilla"],
    },
    { 
        type: "input",
        name: "username", 
        message: "What is your GitHub username?" 
    },
    { 
        type: "input",
        name: "email", 
        message: "What is your email address?" 
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        } else {
            console.log("Your README.md file has been generated");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        const markdown = generateMarkdown(answers);
        writeToFile("sample/README.md", markdown);
    }) 
}

// Function call to initialize app
init();
