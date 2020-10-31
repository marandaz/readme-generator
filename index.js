const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Enter a project description.",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter a usage info.",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter contribution guidelines.",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter test instructions.",
            name: "testInstructions"
        },
        {
            type: "list",
            message: "Choose a license",
            name: "licenseType",
            choices: [
                "MIT License",
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "BSD 2-Clause "Simplified" License",
                "BSD 3-Clause "New" or "Revised" License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense",
            ]
        }
    ])

.then(function(response) {

// function to write README file
fs.writeFile("new-README.md", dataPlaceholder, function(err) {

    if (err) {
      return console.log(err);
    }
    console.log("Success!");


// function to initialize program
function init(questiont.prompt) {

}

// function call to initialize program
init();
