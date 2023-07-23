// Function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string

function renderLicenseBadge(licenceChoice) {
 let licenceBadge;
  switch (licenceChoice) {
    case 'MIT':
    licenceBadge= `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(licenceChoice)})`;
      break;
    case 'APACHE 2.0':
    licenceBadge= `[![License: APACHE 2.0](https://img.shields.io/badge/License-APACHE_2.0-blue.svg)](${renderLicenseLink(licenceChoice)})`;
      break;
    case 'GPL 3.0':
    licenceBadge= `[![License: APACHE 2.0](https://img.shields.io/badge/License-GPL_3.0-violet.svg)](${renderLicenseLink(licenceChoice)})`;
      break;
    case 'BSD 3':
    licenceBadge= `[![License: APACHE 2.0](https://img.shields.io/badge/License-BSD_3.0-purple.svg)](${renderLicenseLink(licenceChoice)})`;
      break;      
    default:
     licenceBadge='';
  }
  return licenceBadge;
}

// Function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(licenseChoice) {
  let licenceLink;
  switch (licenseChoice) {
    case 'MIT':
    licenceLink= 'https://opensource.org/license/mit/';    
      break;
    case 'APACHE 2.0':
      licenceLink= 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      licenceLink= 'https://opensource.org/license/gpl-3-0/';
      break;
    case 'BSD 3':
      licenceLink= 'https://opensource.org/license/bsd-3-clause/';
      break;
    default:
      licenceLink='';
  }
  return licenceLink;
}

// Function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(licenceName) { 
 const licenceSection= `Licence used for this project- ${licenceName}`;  
  return licenceSection;
}

// Function to generate markdown for README
function generateMarkdown(data) {
let licence;
// create badge
const badge= renderLicenseBadge(`${data.licence}`);
if(badge===''){
  licence='N/A';
 }
else{
licence= renderLicenseSection(`${data.licence}`);
 }
// return md file
return `# ${data.title}
  ${badge}
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Contact Information](#contact-information)
  - [Credits](#credits)
  
  ## Installation
  
  To install required dependencies, run the following command :
  
         ${data.dependencies}
    
  ## Usage
  
  ${data.usage}
  
  ## License

  ${licence} 

  To get more information in relation to licence types, please visit this link - [https: //choosealicense.com/](https://choosealicense.com/)
  
  ## Contribution

  To contribute to this application, ${data.contribution}.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Add stages (git add .)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  After reviewing, your feature will be merged.

  ## Tests

  To run tests on it, run the following command :
  
        ${data.test}
  
  ## Questions
  If you have any questions, Feel free to contact me with  the information below:

  Github: [${data.username}](https://github.com/${data.username})

  EmailId: ${data.email}
  
  ## Credits
  
  ### Collaborators
  ${data.credits}

`;
}
// export generatemarkdown function
module.exports = generateMarkdown;
