# phase1_project

const fs = require('fs');

// Define project details
const projectName = 'Featured Revolutionary Artists';
const projectDescription = 'This Single Page Application showcases five revolutionary artists, when  ';
const installationInstructions = 'To install this project, run `npm install`.';
const usageInstructions = 'To use this project, run `node index.js`.';
const contributors = 'John Doe, Jane Smith';
const license = 'MIT License';

// Generate the README content
const readmeContent = `
# ${projectName}

${projectDescription}

## Installation
${installationInstructions}

## Usage
${usageInstructions}

## Contributors
${contributors}

## License
This project is licensed under the ${license}.
`;

// Write the content to README.md
fs.writeFileSync('README.md', readmeContent);

console.log('README.md file has been generated.');
