const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "projectTitle"
        },
        // {
        //     type: "input",
        //     message: "Enter a project description.",
        //     name: "description"
        // },
        // {
        //     type: "input",
        //     message: "Enter installation instructions",
        //     name: "installation"
        // },
        // {
        //     type: "input",
        //     message: "Enter a usage info.",
        //     name: "usage"
        // },
        // {
        //     type: "input",
        //     message: "Enter contribution guidelines.",
        //     name: "contribution"
        // },
        // {
        //     type: "input",
        //     message: "Enter test instructions.",
        //     name: "testInstructions"
        // },
        {
            type: "list",
            message: "Choose a license",
            name: "licenseType",
            choices: [
                "MIT",
                "Apache",
                "GNU"
            ]
        }
        // ,
        // {
        //     type: "input",
        //     message: "Enter your GitHub username.",
        //     name: "githubUsername",
        // },
        // {
        //     type: "input",
        //     message: "Enter your E-mail address.",
        //     name: "email",
        // },
        // {
        //     type: "input",
        //     message: "Enter instructions on how to reach you with additional questions.",
        //     name: "contactInfo",
        // }
    ])

.then(function(response) {

fs.writeFile("new-README.md", generateMarkdown(response), 
function(err) {

    if (err) {
      return console.log(err);
    }
    console.log("Success!");
});
})