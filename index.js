let inquirer = require("inquirer")
let fs = require("fs")

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// ! create readme.md
// ! title input

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// ! description input
// ! installation input
// ! usage input
// ! contribution input
// ! test input

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// ! create sections
// ! append to file

// WHEN I choose a license for my application from a list of options
// ! list options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// ! github badge?

// WHEN I enter my GitHub username
// ! github username input
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// ! find github account?
// ! get url to profile
// ! append to section

// WHEN I enter my email address
// ! email input
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// ! append email to section

// WHEN I click on the links in the Table of Contents
// ! 'jump-to' functionality?
// THEN I am taken to the corresponding section of the README

inquirer
  .prompt([
    {
      type:"input",
      message:"",
      name:"username"
    }
  ]).then(function(res){
    console.log(res)
  })