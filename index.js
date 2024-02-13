const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const tempTeam = [];

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const CaptureTeam = () => {
  // this function orchestrates the capture of the team members

  // Here are all the prompt question
  const ManagerQuestions = [
    {
      type: "input",
      name: "teamManager",
      message: "What is the name of the team manager?",
      default: "John Doe",
    },
    {
      type: "input",
      name: "id",
      message: "What is their employee ID?",
      default: "12435",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address?",
      default: "john@gmail.com",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is their office number?",
      default: "123",
    },
    {
      type: "list",
      name: "options",
      message: "Do you want to add more team members?",
      default: "Engineer",
      choices: ["Engineer", "Intern", "Finish building the team"],
    },
  ];
  const EngineerQuestions = [
    {
      type: "input",
      name: "engineer",
      message: "What is the name of the engineer?",
      default: "Jane Engineer",
    },
    {
      type: "input",
      name: "id",
      message: "What is their employee ID?",
      default: "12436",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address?",
      default: "jane@gmail.com",
    },
    {
      type: "input",
      name: "github",
      message: "What is their Github username?",
      default: "johndck",
    },
    {
      type: "list",
      name: "options",
      message: "Do you want to add more team members?",
      default: "Engineer",
      choices: ["Engineer", "Intern", "Finish building the team"],
    },
  ];
  const InternQuestions = [
    {
      type: "input",
      name: "intern",
      message: "What is the name of the intern?",
      default: "Jane Interm",
    },
    {
      type: "input",
      name: "id",
      message: "What is their employee ID?",
      default: "Int123",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address?",
      default: "intern@gmail.com",
    },
    {
      type: "input",
      name: "school",
      message: "What school did they attend?",
      default: "Belmont House School",
    },
    {
      type: "list",
      name: "options",
      message: "Do you want to add more team members?",
      default: "Engineer",
      choices: ["Engineer", "Intern", "Finish building the team"],
    },
  ];

  const createEngineer = () => {
    inquirer.prompt(EngineerQuestions).then((answers) => {
      //console.log("Thank you for your answers");
      //console.log(answers);

      // create new manager
      const engineer = new Engineer(
        answers.engineer,
        answers.id,
        answers.email,
        answers.github
      );

      /*
      // checking that all functions work
      console.log(`------------------`);
      console.log(engineer.getRole());
      console.log(engineer.getGithub());
      console.log(engineer.getName());
      console.log(engineer.getId());
      console.log(`------------------`);
      */

      // push the new manager into the tempTeam array
      tempTeam.push(engineer);
      if (answers.options === "Engineer") {
        createEngineer();
      }
      if (answers.options === "Finish building the team") {
        //console.log("Thank you for your answers");
        //console.dir(tempTeam, { depth: null });

        let html = render(tempTeam);
        //console.log(html);

        fs.writeFile(outputPath, html, (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
        });
      }
      if (answers.options === "Intern") {
        createIntern();
      }
    });
  };

  const createIntern = () => {
    inquirer.prompt(InternQuestions).then((answers) => {
      // create new manager
      const intern = new Intern(
        answers.intern,
        answers.id,
        answers.email,
        answers.school
      );

      /*
      // checking that all functions work
      console.log(`------------------`);
      console.log(intern.getRole());
      console.log(intern.getSchool());
      console.log(intern.getName());
      console.log(intern.getId());
      console.log(`------------------`);
      */

      // push the new manager into the tempTeam array
      tempTeam.push(intern);

      if (answers.options === "Engineer") {
        createEngineer();
      }
      if (answers.options === "Intern") {
        createIntern();
      }
      if (answers.options === "Finish building the team") {
        //console.dir(tempTeam, { depth: null });

        let html = render(tempTeam);
        //console.log(html);

        fs.writeFile(outputPath, html, (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
        });

        // createHtml();
        // storeHTML();
      }
    });
  };

  const createManager = () => {
    inquirer.prompt(ManagerQuestions).then((answers) => {
      //console.log("Thank you for your answers");
      //console.log(answers);

      // create new manager
      const teamManager = new Manager(
        answers.teamManager,
        answers.id,
        answers.email,
        answers.officeNumber
      );

      /*
      console.log(`------------------`);
      console.log(teamManager.getRole());
      console.log(teamManager.getOfficeNumber());
      console.log(teamManager.getName());
      console.log(teamManager.getId());
      console.log(`------------------`);
      */

      // push the new manager into the tempTeam array
      tempTeam.push(teamManager);

      if (answers.options === "Engineer") {
        createEngineer();
      }
      if (answers.options === "Intern") {
        createIntern();
      }
      if (answers.options === "Finish building the team") {
        //console.log("Thank you for your answers");
        //console.dir(tempTeam, { depth: null });

        let html = render(tempTeam);
        //console.log(html);

        fs.writeFile(outputPath, html, (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
        });

        // createHtml();
        // storeHTML();
      }
    });
  };
  /////////////////end of functions/////////////////////
  createManager();
};

CaptureTeam();
