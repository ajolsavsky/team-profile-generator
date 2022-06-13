const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        console.log(`My gitHub is ${github}`)
    }

    getRole() {
        console.log (`Role: ${this}`)
    }

}

module.exports = Engineer;