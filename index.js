// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');
const {writeFile} = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the description of the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license would you like to select?',
        choices: ['MIT', 'Apache', 'Mozilla'],
        default: ''
    }, 
    {
        type: 'input',
        name: 'contributing',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is the description of the project?'
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
