// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This application is covered by the ${data.license} License. 

  ## Contributors

  ${data.contributors}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions, reach out to me via:
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
