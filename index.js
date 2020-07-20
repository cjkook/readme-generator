const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
// ! promisify in act 34
let readme = {
  title: "",
  description: "",
  install: "",
  usage: "",
  contribute: "",
  test: "",
  license: "",
  badge: "",
  gitUser: "",
  email: "",
  image: "",
};

const licenseBadge = [
  "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
];

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// create readme.md
// ? create json to save for later?
//  title input

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//  description input
//  installation input
//  usage input
//  contribution input
//  test input

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// ! create sections
// ! append to file

// WHEN I choose a license for my application from a list of options
// list options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
//  github username input
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// ! find github account?
// ! async await promises
// ! get url to profile
// ! append to section

// WHEN I enter my email address
// ! email input
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// ! append email to section

// WHEN I click on the links in the Table of Contents
// ! 'jump-to' functionality?
// THEN I am taken to the corresponding section of the README

// NEW OR OLD
inquirer
  .prompt([
    {
      type: "list",
      message: "Create a new file or edit an existing one?",
      name: "action",
      choices: ["new", "existing"],
    },
  ])
  .then(function (res) {
    res.action === "new" ? fnNew() : fnOld();
  });

// CREATE NEW ENTRY
function fnNew() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter a title for your project",
        name: "title",
      },
      {
        type: "input",
        message: "Please enter a description for your project",
        name: "description",
      },
      {
        type: "input",
        message: "Please enter the installation for your project",
        name: "install",
      },
      {
        type: "input",
        message: "Please enter the usage for your project",
        name: "usage",
      },
      {
        type: "input",
        message: "Please enter contributors to your project",
        name: "contribute",
      },
      {
        type: "input",
        message: "Please enter a test for your project",
        name: "test",
      },
      {
        type: "list",
        message: "Please enter a license for your project",
        name: "license",
        choices: ["Creative Commons", "MIT", "GNU"],
      },
      {
        type: "input",
        message: "Please enter your GitHub username",
        name: "gitUser",
      },
      {
        type: "input",
        message: "Please enter your email",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter image url",
        name: "image",
      },
    ])
    .then(function (res) {
      readme = res;

      console.log(readme);

      fnWrite();
    });
}

function fnOld() {
  // open json file
}

function fnWrite() {
  let rawText = "";

  // title
  rawText += `# ${readme.title}\n\r`;

  // badge

  switch (readme.license) {
    case "Creative Commons":
      rawText += `${licenseBadge[0]} `;
      break;
    case "MIT":
      rawText += `${licenseBadge[1]} `;
      break;
    case "GNU":
      rawText += `${licenseBadge[2]} `;
      break;
  }

  // Table of contents
  rawText += `\n\r
  * [Description](#description)
  * [Install](#install)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [License](#license)
  * [Contact](#contact)\n\r`;

  //description
  rawText += `## Description\n\r${readme.description}\n\r`;

  // install
  rawText += `## Install\n\r${readme.install}\n\r\n\r`;

  // usage
  rawText += `## Usage\n\r${readme.usage}\n\r\n\r`;

  // contributions
  rawText += `## Contributions\n\r${readme.contribute}\n\r\n\r`;

  // test

  // license
  rawText += `## License\n\r${readme.license}\n\r\n\r`;

  // gituser // email
  rawText += `## Contact\n\r[${readme.gitUser}](https://github.com/${readme.gitUser})\n\r${readme.email}\n\r\n\r`;

  // image
  rawText += `![Screenshot](${readme.image})\n\r`;

  // fs.writeFile("README.md", rawText, function(err)
  fs.writeFile("README.md", rawText, function (err) {
    if (err) throw err;

    console.log("README.md generated.");
  });
}

//

// });

// if (response.confirm === response.password) {
//   console.log("Success!");
// }
