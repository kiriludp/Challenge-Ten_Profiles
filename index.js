const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = ('./util/generateHTML');
//const Employee = require('./Develop/Lib/Employee');
//const Manager = require('./Develop/Lib/Manager.js');
//const Intern = require('./Develop/Lib/Intern');
//const Engineer = require ('./Develop/Lib/engineer');
const createPage = require('./Develop/util/generateHTML');
const Intern = require('./Develop/Lib/Intern');

const team = [];

function menu() {
    inquirer.prompt ([
            {
            type: 'list',
            message: 'Choose employee role',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern', 'Done'],
        },
    ]).then(function (addNew) {
            if (addNew.role === 'Manager') {
                managerQuestions();
            }
            else if (addNew.role === 'Engineer') {
                engineerQuestions();
            }
            else if (addNew.role === 'Intern') {
                internQuestions();
            }
            else if (addNew.role === 'Done') {
                generateTeam();
            }
        })
    }

    function managerQuestions() {
        inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the manager name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name');
                    return false;
                }
            }

    },
    {
        type: 'input',
       name: 'id',
       message: 'Please enter manager id',
       validate: idInput => {
           if(idInput) {
               return true;
           } else {
               console.log('Please enter correct id');
                   return false;
               }
               }
           },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter email',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter correct email');
                return false;
            }
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'Please enter Office Phone Number',
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter correct phone number');
                    return false;
            }
            }
        },
    ]).then( (templateData) => {
                const manager = manager(templateData.name, templateData.email, templateData.officeNumber);
                this.teamArray.push(manager);
                menu();
            });
            
         }

         function engineerQuestions() {
            inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the engineer name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name');
                        return false;
                    }
                } 
            },
    
        {
            type: 'input',
            name: 'id',
            message: 'Please enter employee id',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter correct id');
                    return false;
                }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter email',
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log('Please enter correct email');
                        return false;
                }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter github username',
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log('Please enter correct username');
                        return false;
                }
                }
            },
        ]).then( (templateData) => {
                    const newEngineer = Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                    this.teamArray.push(newEngineer);
                    menu();
                });
            }
    function internQuestions() {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the intern name',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                        console.log('Please enter the name');
                         return false;
                            }
                        } 
                    },
            
            {
                 type: 'input',
                name: 'id',
                message: 'Please enter intern id',
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log('Please enter correct id');
                            return false;
                        }
                        }
                    },
             {
                type: 'input',
                name: 'school',
                message: 'Please enter school',
                    validate: emailInput => {
                        if(emailInput) {
                            return true;
                         } else {
                            console.log('Please enter correct school name');
                                return false;
                        }
                        }
                },
                   
        ]).then( (templateData) => {
             const newIntern = newIntern(templateData.name, templateData.id, templateData.school);
                this.teamArray.push(newIntern);
            menu();
        });
    }
        
    function generateTeam() {
        console.log('Team Generation Complete')
        fs.writeFile('./main/index.html')
        renderTeam(teamArray), function (err) {
            if (err) {
                return console.log(err)
            }
    };
}

menu();