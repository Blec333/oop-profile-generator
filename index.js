
const inquirer = require('inquirer');
const fs = require("fs");
const genHTMLCSS = require("./lib/generate-htmlcss");


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
function askMgrQuestions() {
    genHTMLCSS.writeHTMLTop();
    genHTMLCSS.writeCSS();
    const questions = [
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Manager: What is your name?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'Please enter your employee ID:',
                    name: 'id'
                },
                {
                    type: 'input',
                    message: 'Please enter your email:',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'Please enter your office phone number (direct line):',
                    name: 'info'
                },
                // WHEN I enter the team manager’s name, employee ID, email address, and office number
                // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
                {
                    type: 'list',
                    message: 'What would you like to do next? (Please choose an option):',
                    name: 'nextAction',
                    choices: ['Add an engineer', 'Add an intern', 'Finish']
                }
            ])
            .then((response) => {
                genHTMLCSS.appendHTMLCard(response.name, "Manager", response.id, response.email, response.info);
                if (response.nextAction === 'Add an engineer') {
                    askEngQuestions();
                } else if (response.nextAction === 'Add an intern') {
                    askInternQuestions();
                } else {
                    // WHEN I decide to finish building my team
                    // THEN I exit the application, and the HTML is generated
                    genHTMLCSS.appendHTMLBot()
                    console.log('Team is complete please view your team site.')
                }

            }
            )
    ];
}

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
function askEngQuestions() {
    const questions = [
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your engineer\'s name?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'Please enter your employee ID:',
                    name: 'id'
                },
                {
                    type: 'input',
                    message: 'Please enter your email:',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'Please enter your GitHub username',
                    name: 'info'
                },
                {
                    type: 'list',
                    message: 'What would you like to do next? (Please choose an option):',
                    name: 'nextAction',
                    choices: ['Add an engineer', 'Add an intern', 'Finish']
                }
            ])
            .then((response) => {
                genHTMLCSS.appendHTMLEngineerCard(response.name, "Engineer", response.id, response.email, response.info);
                if (response.nextAction === 'Add an engineer') {
                    askEngQuestions();
                } else if (response.nextAction === 'Add an intern') {
                    askInternQuestions();
                } else {
                    // WHEN I decide to finish building my team
                    // THEN I exit the application, and the HTML is generated
                    genHTMLCSS.appendHTMLBot()
                    console.log('Team is complete please view your team site.')
                }
            }
            )
    ];
}

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
function askInternQuestions() {
    const questions = [
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your intern\'s name?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'Please enter your employee ID:',
                    name: 'id'
                },
                {
                    type: 'input',
                    message: 'Please enter your email:',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'Please enter the name of your school:',
                    name: 'info'
                },
                {
                    type: 'list',
                    message: 'What would you like to do next? (Please choose an option):',
                    name: 'nextAction',
                    choices: ['Add an engineer', 'Add an intern', 'Finish']
                }
            ])
            .then((response) => {
                genHTMLCSS.appendHTMLCard(response.name, "Intern", response.id, response.email, response.info);
                if (response.nextAction === 'Add an engineer') {
                    askEngQuestions();
                } else if (response.nextAction === 'Add an intern') {
                    askInternQuestions();
                } else {
                    // WHEN I decide to finish building my team
                    // THEN I exit the application, and the HTML is generated
                    genHTMLCSS.appendHTMLBot()
                    console.log('Team is complete please view your team site.')
                }
            }
            )
    ];
}

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    function init() {
        askMgrQuestions();
    }
    
    // Function call to initialize app
    init();
    