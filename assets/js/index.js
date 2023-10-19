// Start of JS file
// TODO: Include packages needed for this application
// The inquirer, generateMarckdown, renderLicenseSection, and fs objects/functions required.
const inquirer = require('inquirer');
const { generateMarkdown, renderLicenseSection } = require('./generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
// questions array for the user to answer, in regards to creating a README file.
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
        message: 'What is the installation needed for this project?', 
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
        message: 'What is your GitHub username?', 
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
// writeToFile writes the README
function writeToFile(fileName, data) {

    fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'));
}

// TODO: Create a function to initialize app
// init initializes the program with questions when 'node index.js' is ran. 
function init()
{
    // Starts the questions/inquirer -> prompts upon init()
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeGEN = generateMarkdown(answers);
        const licenseSection = renderLicenseSection(answers.license);
        writeToFile('README.md', readmeGEN);
        fs.appendFileSync('README.md', licenseSection);
    });
}
// Function call to initialize app
init();
// End of JS File