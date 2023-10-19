// Start of JS File
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// renderLicenseBadge returns the license badge, based on which license passed in.
function renderLicenseBadge(license) {
  // Licenses passed in: 'Apache', 'GNU', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost', 'Creative Commons Zero',
  // 'Eclipse', 'Mozilla', 'Unlicense', 'NONE'
  // If 'NONE' ('else'), returns empty string.
  if (license === "Apache")
  {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  }

  else if (license === "GNU")
  {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  }

  else if (license === "MIT")
  {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }

  else if (license === "BSD 2-Clause")
  {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
  }

  else if (license === "BSD 3-Clause")
  {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
  }

  else if (license === "Boost")
  {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
  }

  else if (license === "Creative Commons Zero")
  {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]`;
  }

  else if (license === "Eclipse")
  {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
  }

  else if (license === "Mozilla")
  {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
  }

  else if (license === "Unlicense")
  {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
  }

  else
  {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// renderLicenseLink will return the link of the license chosen, as long as it is not 'NONE'.
function renderLicenseLink(license) {
  // Licenses passed in: 'Apache', 'GNU', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost', 'Creative Commons Zero',
  // 'Eclipse', 'Mozilla', 'Unlicense', 'NONE'
  // If 'NONE' ('else'), returns empty string.
  if (license === "Apache")
  {
    return `https://opensource.org/licenses/Apache-2.0`;
  }

  else if (license === "GNU")
  {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  }

  else if (license === "MIT")
  {
    return `https://opensource.org/licenses/MIT`;
  }

  else if (license === "BSD 2-Clause")
  {
    return `https://opensource.org/licenses/BSD-2-Clause`;
  }

  else if (license === "BSD 3-Clause")
  {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }

  else if (license === "Boost")
  {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  }

  else if (license === "Creative Commons Zero")
  {
    return `http://creativecommons.org/publicdomain/zero/1.0/`;
  }

  else if (license === "Eclipse")
  {
    return `https://opensource.org/licenses/EPL-1.0`;
  }

  else if (license === "Mozilla")
  {
    return `https://opensource.org/licenses/MPL-2.0`;
  }

  else if (license === "Unlicense")
  {
    return `http://unlicense.org/`;
  }

  else
  {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// renderLicenseSection creates and returns the License section of the README, as long as 'NONE' isn't selected.
function renderLicenseSection(license) {
  // Returns ## License section of README
  // If no license, return empty string
  if (license !== "NONE")
  {
    return `
  ## License
  This project is covered under the ${license} license. </br>
  License link: ${renderLicenseLink(license)}`;
  }

  else
  {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
// generateMarkdown will generate the full markdown (except license section) for the README file.
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Badge
  ${renderLicenseBadge(data.license)}
  </br>

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
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

  ## Contributing
  ${data.contributing}
  </br>

  ## Tests
  ${data.tests}
  </br>

  ## Questions
  GitHub profile: https://github.com/${data.github} </br>
  Email: ${data.email} </br>
  How to reach me: ${data.howtoreach} </br>
  </br>

`;
}
// Exports the functions for index.js to require/read-in.
module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
// End of JS File