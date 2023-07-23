// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// An array of questions for user input
const questions = ["What is your GitHub username ? ", "What is your email address ? ", "What is your project's name ?", "Please write a short description of your project.", "What kind of license should your project have ?", "What command should be run to install dependencies ? ", "What command should be run to run tests ?", "What does the user need to know about using the repo ? ", "What does the user need to know about contributing to the repo ?","List your collaborators"];

// function to write README file
function writeToFile(fileName, data) {
    const fullFileName=`./output/${fileName}`;  
    // get page content from generatemarkdown function in generatemarkdown.js file after getting answers 
    const readmePageContent = generateMarkdown(data); 
    // write file using file system package   
    fs.writeFile(fullFileName, readmePageContent,(err) =>
    err ? console.log(err) : console.log('Successfully created README.md')
  );
}

const promptUser = () => {
    // prompt questions using inquirer package
    return inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'title',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[3],
      },
      {
        type: 'list',
        name: 'licence',
        message: questions[4],
        choices:[ 'MIT','APACHE 2.0','GPL 3.0','BSD 3','none'],
      },
      {
        type: 'input',
        name: 'dependencies',
        message: questions[5],
        default: 'npm inquirer@^8.2.4',
      },
      {
        type: 'input',
        name: 'test',
        message: questions[6],
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'contribution',
        message: questions[8],
      },
      {
        type: 'input',
        name: 'credits',
        message: questions[9],
      },
    ]);
  }
//  function to initialize app
function init() {
    promptUser()      
        .then((answers)=>{
            // call to function writetofile         
            writeToFile("README.md",answers);
        })
        .catch((err) =>
         err ? console.log(err) : console.log('Successfully created README.md!'));
  
}
// Function call to initialize app
init();
