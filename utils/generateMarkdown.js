// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    console.log(license)
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)
    - ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache_2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else if (license == "GPLv3") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  } else if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license == "MPL_2.0") {
    return `https://www.mozilla.org/en-US/MPL/` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `
## License
${renderLicenseBadge(license)}\n
This project is covered under the ${license} license. 
To learn more about the license, click on the license link at the top.`
  }
}

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

  ${renderLicenseSection(data.license)}

  ## Contributors

  ${data.contributors}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions, reach out to me via:\n
  GitHub: [${data.username}](https://github.com/${data.username})\n
  Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
