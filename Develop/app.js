// NPM Packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Output Folder
const outputPath = path.resolve(__dirname, 'output', "team.html");

// Classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const mainHTML = require("./templates/mainHTML")

// Cards
const managerCard = require('./templates/managerhtml');
const internCard = require('./templates/internhtml');
const engineerCard = require('./templates/engineerhtml');

const fullTeam = [];

// Initial Prompt
const mainApp = () => {
    console.log('Please build your team');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: 'What is your Managers name?',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'What is the employee id?',
          validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: 'What is your managers email?',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter an email.';
          },
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is your managers office number?',
          validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number.';
          },
        },
      ])
      .then(response => {
        const manager = new Manager(
          response.managerName,
          response.managerId,
          response.managerEmail,
          response.officeNumber
        );
        const managerCardHtml = managerCard(manager);
        fullTeam.push(managerCardHtml);
        addTeamMembers();
      });

    // Add Additional Team Members
    function addTeamMembers() {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'addMembers',
              message: 'What would you like to do?',
              choices: [
                'Add an Engineer',
                'Add an Intern',
                "I'm all done. Let's see my team!",
              ],
            },
          ])
          .then(answers => {
            switch (answers.addMembers) {
              case 'Add an Engineer': {
                promptEngineer();
                break;
              }
              case 'Add an Intern': {
                promptIntern();
                break;
              }
              case "I'm all done. Let's see my team!": {
                buildTeam();
                break;
              }
            }
          });
        }

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
