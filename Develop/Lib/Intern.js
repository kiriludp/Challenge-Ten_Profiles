// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern'
        
    }

    getGithub() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;