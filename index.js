const inquirer = require('inquirer');
const fs = require('fs');

const questionsTeamManager = [
    {
        type: 'input',
        message: "Enter the team manager's name",
        name: 'name',
    },
    {
        type: 'input',
        message: "Enter the team manager's employee ID",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter the team manager's email address",
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter the team manager's office number",
        name: 'officeNumber',
    }
]

const nextStepList = [
    {
        type: 'list',
        message: 'Add an engineer, intern, or finish building your team',
        name: 'nextStep',
        choices: ["Add an engineer", "Add an intern", "Finish building team"]
    }
]

const questionsEngineer = [
    {
        type: 'input',
        message: "Enter the engineer's name",
        name: 'name',
    },
    {
        type: 'input',
        message: "Enter the engineer's employee ID",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter the engineer's email address",
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter the engineer's github username",
        name: 'github',
    },
]

const questionsIntern = [
    {
        type: 'input',
        message: "Enter the intern's name",
        name: 'name',
    },
    {
        type: 'input',
        message: "Enter the intern's employee ID",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter the intern's email address",
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter the intern's school",
        name: 'school',
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README!'))
}

function init() {
    inquirer
        .prompt(questionsTeamManager)
        .then(
            inquirer
                .prompt(nextStepList)
                .then((data) => {
                    if (data.nextStep==="Add an engineer") {
                        
                    }
                }
                )
        )
}

init();