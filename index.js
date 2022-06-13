const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

const teamArray = []

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

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log('Successfully created README!'))
// },

const addManager = () => {
    inquirer.prompt (questionsTeamManager)
    .then((data) => {
        const { name, id, email, officeNumber } = data;
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager);
        addEmployee();
    })
};

const addEmployee = () => {
    inquirer.prompt (nextStepList)
    .then((data) => {
        if (data.nextStep==="Add an engineer") {
            addEngineer();
        } else if (data.nextStep==="Add an intern") {
            addIntern();
        } else {
            console.log("We're done")
            console.log(teamArray);
        }
    }
    )
}

const addIntern = () => {
    inquirer.prompt(questionsIntern)
    .then((data) => {
        const { name, id, email, school } = data;
        const intern = new Intern (name, id, email, school);
        teamArray.push(intern);
        addEmployee();
    })
}

const addEngineer = () => {
    inquirer.prompt(questionsEngineer)
    .then((data) => {
        const { name, id, email, github } = data;
        const engineer = new Engineer (name, id, email, github);
        teamArray.push(engineer);
        addEmployee();
    })
}

addManager();