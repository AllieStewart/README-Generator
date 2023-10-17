// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // returns license badge based on which license passed in
      // choices: [ 'MIT', etc?];
  // if no license, return empty string
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // returns license link; if no license, return empty string
  // license link, hmm...
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // returns license section of README
  // if no license, return empty string
  // ##LICENSE or ##LICENSES section
}

// TODO: Create a function to generate markdown for README
// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
// ^Badges
function generateMarkdown(data) {
  return `# ${data.title}
  </br>
  ## Badge
  ![badmath]

  ## Table of Contents
  - [Description](#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [Questions] (#questions)
  - [Licenses] (#licenses)
  </br>

  ## Description
  ${data.description}
  </br>

  ## Installation
  ${data.installation}
  </br>

  ## Usage
  ${data.usage}
  </br>

  ## License
  ${data.license}
  </br>

  ## Contributing
  ${data.contributing}
  </br>

  ## Tests
  ${data.tests}
  </br>

  ## Questions
  GitHub profile: github.com/${data.github}
  Email: ${data.email}
  How to reach me: ${data.questions}
  </br>

`;
}
// after return, add more `# ${data.<word>}` values,
// sections: [Description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, and Questions].
// License badge near top of README.

module.exports = generateMarkdown;