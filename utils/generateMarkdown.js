// function to generate markdown for README
function generateMarkdown(data) {
  // console.log("genMarkdown", data);
  return `
  # ${data.projectTitle} \n ![License](https://img.shields.io/badge/License-${data.licenseType}-success.svg) \n 
  
  ## Table of Contents
  * [Description](#description)
    * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Test Instructions](#test)
  * [Questions](#questions) 

  ## Description \n ${data.description} \n 
  ## Installation \n ${data.installation} \n 
  ## Usage \n ${data.usage} \n 
  ## Contribution \n ${data.contribution} \n 
  ## License \n ${data.licenseType} \n 
  ## Test Instructions \n ${data.testInstructions} \n
  ## Questions \n [Github](https://github.com/${data.githubUsername})| ${data.email} \n 
  ### More info on contacting me \n ${data.contactInfo}  \n`}


module.exports = generateMarkdown;



