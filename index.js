// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');
const {writeFile} = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license would you like to select?',
        choices: ['MIT', 'Apache', 'Mozilla']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, 'utf8', (err) => console.log('error in file', err));
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log('answers are: ', answers);
    const genMarkDown = generateMarkdown(answers);
    writeToFile(answers.title + '_readme.md', genMarkDown);
}

// Function call to initialize app
init();
