class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log (`Employee Name: ${this.name}`)
    }

    getID() {
        console.log (`ID: ${this.id}`)
    }

    getEmail() {
        console.log (`Email: ${this.email}`)
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;