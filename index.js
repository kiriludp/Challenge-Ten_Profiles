const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = ('./util/generateHTML.js');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const Manager = require('./Develop/Lib/Manager');
const Intern = require('./Develop/Lib/Intern');
const Engineer = require ('./Develop/Lib/engineer');



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
            

    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter manager id',
       
        },

        {
        type: 'input',
        name: 'email',
        message: 'Please enter email',
      
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'Please enter Office Phone Number',
        },

    ]).then( (templateData) => {
                const manager = new Manager(templateData.name, templateData.email, templateData.officeNumber);
                this.team.push(manager);
                addNew();
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
             const newIntern = Intern(templateData.name, templateData.id, templateData.school);
                this.teamArray.push(newIntern);
            menu();
        });
    }
        
    function generateFile() {
        console.log('Team Generation Complete')
        fs.writeFile('./util/generateHTML')
        renderTeam(teamArray), function (err) {
            if (err) {
                return console.log(err)
            }
    };
}

menu();