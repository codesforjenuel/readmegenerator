const inquirer = require("inquirer")
const generateMd = require("./markdown")
const fs = require("fs")
function init() {
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of my project?",
        name: "project name"
    },
    {
        type: "input",
        message: "how can you describe your project?",
        name: "description"  
    },
    {
        type: "input",
        message: "describe steps of installation",
        name: "install"
    },
    {
        type: "input",
        message: "Explain how to use your application",
        name: "use"
    },
    {
        type: "confirm",
        message: "Would you like to accept any contributions?",
        name: "contribution"
    },
    {
        type: "input",
        message: "how was this tested?",
        name: "test description"
    },
    {
        type: "input",
        message: "what is your Github username",
        name: "username"
    },
    {
        type: "input",
        message: "enter email address?",
        name: "email"
    },
    {
        type: "list",
        message: "pick one license?",
        name: "type",
        choices: ["MIT", "Apache", "GNU General Public License"]
    }


])

.then(answers => {
    console.table(answers)
    const markdown = generateMd(answers)
    console.log(markdown)

    fs.writeFileSync("readmefile.md", markdown)
})
}

init()