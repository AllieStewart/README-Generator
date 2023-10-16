// Start of JS file
// Write the code here.
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
// inquirer
//  .prompt([
    // {
        // type: 'input' or 'list' or 'checkbox', message: 'Question?', name: 'something',
        // choices: [ 'choice1', 'choice2' ]
    // },
//])
const questions = [
    // Project title? -> displays as title of README
    // Ask about description, installation instructions, 
    // usage information, contribution guidelines, and test instructions;
    // -> Add under their sections; Description, Installation, Usage, Contributing, and Tests
    // Choose License from LIST OF OPTIONS
    // -> Badge added near top of README, notice added to License section
    // GitHub username? -> Added to Questions section, with link to GitHub profile
    // Email address? -> Added to Questions section, with instructions
    // on how to reach <user> with additional questions.
    // Click on links in Table of Contents, directed to corresponding section of README
];

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