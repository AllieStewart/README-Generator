// Start of JS file

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { renderLicenseBadge, renderLicenseLink, generateMarkdown, renderLicenseSection } = require('./generateMarkdown.js');
//const licenseBadge = require('./generateMarkdown.js').renderLicenseBadge;
//const licenseLink = require('./generateMarkdown.js').renderLicenseLink;
//const licenseSection = require('./generateMarkdown.js').renderLicenseSection;
const fs = require('fs');
//const { writeToFile } = require('fs').promises;

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
    // append renderLicenseSection to generateMarkdown?
    // appendFileSync('README.md', renderLicenseSection)
    //licenseBadge = renderLicenseBadge(answers.license);
    //licenseLink = renderLicenseLink(answers.license);
    //licenseSection = renderLicenseSection(answers.license);

    fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'));
}

// TODO: Create a function to initialize app
function init()
{
    // Starts the questions/inquirer -> prompts upon init()
    inquirer.prompt(questions)
    //.then((answers) => renderLicenseBadge(answers.license))
    //.then((answers) => renderLicenseLink(answers.license))
    .then((answers) => {
        const readmeGEN = generateMarkdown(answers);
        const licenseBadge = renderLicenseBadge(answers.license);
        const licenseLink = renderLicenseLink(answers.license);
        const licenseSection = renderLicenseSection(answers.license);
        //writeToFile('README.md', generateMarkdown(answers)))
        writeToFile('README.md', readmeGEN);
        fs.appendFileSync('README.md', licenseSection);
});
    //.catch((err) => console.error(err));
}
// Function call to initialize app
init();
// End of JS File