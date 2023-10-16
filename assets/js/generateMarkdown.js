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
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
// after return, add more `# ${data.<word>}` values,
// maybe License, Description, Links, etc.

module.exports = generateMarkdown;