import React from "react";

export default function Project() {
  const projectInfo = [
    {
      id: 0,
      name: "Meeting of the Minds",
      description:
        "Using MVC architecure, this application served as my first full stack deliverable. It serves as a retro-tech blog site where users may create post and comments.",
      languages: ["MySQL", "Express", "Node.js"],
      url: "https://whispering-lowlands-00965.herokuapp.com/",
      github: "https://github.com/AHudg/meeting-of-the-minds",
    },
    {
      id: 1,
      name: "Compère",
      description:
        "This full stack application was a group project, focusing on communicating as a team. The server hosts a database of quizzes for you and your friends to take and see where you rank.",
      languages: ["MySQL", "Express", "Handlebars", "Node.js"],
      url: "https://vast-eyrie-87159.herokuapp.com/",
      github: "https://github.com/AHudg/compere",
    },
    {
      id: 2,
      name: "Recipe Box",
      description:
        "This group assignment utilized third party APIs to create a user friendly front end application. It allows the user to find recipes based on ingredients they have in their home.",
      languages: ["JQuery", "Foundation CSS", "Edamam API", "Punk API"],
      url: "https://ahudg.github.io/recipe-box/",
      github: "https://github.com/AHudg/recipe-box",
    },
    {
      id: 3,
      name: "Thinking Social",
      description:
        "A back-end only application that meets the requirements for a RESTful API. Users are can add friends, make thoughts, and react to others.",
      language: ["MongoDB", "Express", "Node.js"],
      url: "",
      github: "https://github.com/AHudg/thinking-social-api",
    },
    {
      id: 4,
      name: "Company Stalking",
      description:
        "This product was used to help learn the basics of databases. This back-end application host a database for the user to keep track of employee informaiton.",
      language: ["MySQL", "Node.js"],
      url: "",
      github: "https://github.com/AHudg/company-stalking",
    },
    {
      id: 5,
      name: "Team Management",
      description:
        "This back-end application focused on Object Oriented Programming (OOP) and Test Driven Development (TDD). It is uses the command line to accept user input and populates a corresponding HTML page.",
      language: ["Jest", "Express", "Node.js"],
      url: "",
      github: "https://github.com/AHudg/ProfileBuilder-Team-Management",
    },
    {
      id: 6,
      name: "Oh, The Weather Outside Is",
      description:
        "This front end application uses server API calls to populate the weather forecast based on cities. It allows the user to save the queries for future reference.",
      language: ["JQuery", "Foundation CSS", "Open Weather Server API"],
      url: "https://ahudg.github.io/oh-the-weather-outside-is/",
      github: "https://github.com/AHudg/oh-the-weather-outside-is",
    },
    {
      id: 7,
      name: "JavaScript Pop Quiz",
      description:
        "A pop quiz over everyone's favorite language: JavaScript! This front end application served as one of my first JavaScript deliverables.",
      language: ["JavaScript", "CSS", "HTML"],
      url: "https://ahudg.github.io/javascript-pop-quiz/",
      github: "https://github.com/AHudg/javascript-pop-quiz",
    },
  ];
  return (
    <div className="row">
      {projectInfo.map((project, i) => (
        <img
          src={require(`../../assets/portfolio/${i}.png`)}
          alt={project.name}
          className="col-10 col-md-5 m-2"
          // why do you need a key here?
          key={project.name}
        />
      ))}
    </div>
  );
}
