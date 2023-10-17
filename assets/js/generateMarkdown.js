// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // returns license badge based on which license passed in
      // choices:
      // [ 'Apache', 'GNU', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost', 'Creative Commons Zero',
      // 'Eclipse', 'Mozilla', 'Unlicense', 'NONE']
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
function generateMarkdown(data) {
  return `# ${data.title}
  </br>
  ## Badge
  ![GitHub](https://img.shields.io/github/license/:${data.github}/:${data.title})
  </br>

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
  How to reach me: ${data.howtoreach}
  </br>
`;
}

module.exports = generateMarkdown;