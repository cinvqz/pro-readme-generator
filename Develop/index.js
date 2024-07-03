// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like to title your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide the installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide the usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide the contribution guidelines:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide the test instructions:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license would you like to use for this project?',
        name: 'license',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('README.md', generateMarkdown({ ...userAnswers }));
    });
}

// Function call to initialize app
init();
