function generateMd(data) {
    let markdown = `${getBadge(data.type)}
# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)
## Installation
${data.install}
## Usage
${data.use}
## Contribution
${contribute(data.contribution)}
## Testing
${data.test}
## Questions
Visit my github profile here: [github](https://github.com/${data.username})
Or email me at: ${data.email}
    `
    return markdown
}

function getBadge(choice){
    switch (choice) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        case "Apache":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        case "GNU General Public License":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        default:
            break;
    }
}
function contribute(choice){
    if (choice)
 {
     return "see the email below and send me any inquiries"
 }
else {
return "No contributions are accepted"



}
}

module.exports = generateMd;