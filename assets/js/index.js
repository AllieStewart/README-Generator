// Start of JS file
// Write the code here.
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
 .prompt([
    {
        type: 'input', 
        message: 'Welcome to the README generator! What is the title of your project?', 
        name: 'title',
    },
    {
        type: 'input', 
        message: 'Give a description of your project.', 
        name: 'description',

    },
    {
        type: 'input', 
        message: 'What is the installation method?', 
        name: 'installation',
    },
    {
        type: 'input', 
        message: 'What is the usage?', 
        name: 'usage',
    },
    {
        type: 'input', 
        message: 'Who contributed to the project?', 
        name: 'contributing',
    },
    {
        type: 'input', 
        message: 'What kind of tests were ran?', 
        name: 'tests',
    },
    {
        type: 'list', 
        message: 'Select a license that you will be using in your code.', 
        name: 'license',
        choices: [ 'MIT', '' ]
    },
    {
        type: 'input', 
        message: 'What is your GitHub profile name?', 
        name: 'github',
    },
    {
        type: 'input', 
        message: 'What is your email address?', 
        name: 'email',
    },
    {
        type: 'input', 
        message: 'Instructions on how to reach you?', 
        name: 'questions',
    },
])

//const questions = [
//
//];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // write README file; would use markdown object
}

// TODO: Create a function to initialize app
function init() {
    // starts the questions/inquirer -> prompts upon init()
}

// Function call to initialize app
init();