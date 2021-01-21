// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
  case 'MIT':
     return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
   case 'MIT':
     return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)'
    case 'Mozilla':
      return '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseLink(license) + renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

## Usage

## License
${renderLicenseSection(data.license)}

## Contrubuting

## Tests

## Questions
`;
}

module.exports = generateMarkdown;