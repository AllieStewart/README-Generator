// Start of JS file

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('/generateMarkdown');
//const fs = require('fs');
const { writeToFile } = require('fs').promises;

// TODO: Create an array of questions for user input
//const promptUser = () => {
//    return inquirer.prompt([
const questions = [
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
        message: 'How do you use this project?', 
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
        choices: [ 'Apache', 'GNU', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost', 'Creative Commons Zero',
    'Eclipse', 'Mozilla', 'Unlicense', 'NONE']
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
        name: 'howtoreach',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // write README file; would use markdown object
}

// TODO: Create a function to initialize app
function init()
{
    // Starts the questions/inquirer -> prompts upon init()
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
// End of JS File