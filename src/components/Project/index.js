import React, { useState } from "react";
import Modal from "../Modal";

export default function Project() {
  // initialize state variable for tracking if modal is upon w/ initial value = false (or closed)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // initialize state variable for individual projects when selected so the modal can display it's information
  const [selectedProject, setSelectedProject] = useState();
  // initialize data here
  const projectInfo = [
    {
      id: 0,
      name: "The Middle Man",
      description:
        "My first full stack MERN application. This was a group project that connects client to wholesale vendor- targeting small businesses for organization.",
      languages: ["MERN"],
      url: "https://stark-ridge-51286.herokuapp.com/",
      github: "https://github.com/AHudg/plantasia",
    },
    {
      id: 1,
      name: "Meeting of the Minds",
      description:
        "Using MVC architecure, this application served as my first full stack deliverable. It serves as a retro-tech blog site where users may create post and comments.",
      languages: ["MySQL", "Express", "Node.js"],
      url: "https://whispering-lowlands-00965.herokuapp.com/",
      github: "https://github.com/AHudg/meeting-of-the-minds",
    },
    {
      id: 2,
      name: "Compère",
      description:
        "This full stack application was a group project, focusing on communicating as a team. The server hosts a database of quizzes for you and your friends to take and see where you rank.",
      languages: ["MySQL", "Express", "Handlebars", "Node.js"],
      url: "https://vast-eyrie-87159.herokuapp.com/",
      github: "https://github.com/AHudg/compere",
    },
    {
      id: 3,
      name: "Recipe Box",
      description:
        "This group assignment utilized third party APIs to create a user friendly front end application. It allows the user to find recipes based on ingredients they have in their home.",
      languages: ["JQuery", "Foundation CSS", "Edamam API", "Punk API"],
      url: "https://ahudg.github.io/recipe-box/",
      github: "https://github.com/AHudg/recipe-box",
    },
    {
      id: 4,
      name: "Thinking Social",
      description:
        "A back-end only application that meets the requirements for a RESTful API. Users are can add friends, make thoughts, and react to others.",
      languages: ["MongoDB", "Express", "Node.js"],
      url: "",
      github: "https://github.com/AHudg/thinking-social-api",
    },
    {
      id: 5,
      name: "Company Stalking",
      description:
        "This product was used to help learn the basics of databases. This back-end application host a database for the user to keep track of employee informaiton.",
      languages: ["MySQL", "Node.js"],
      url: "",
      github: "https://github.com/AHudg/company-stalking",
    },
    {
      id: 6,
      name: "Team Management",
      description:
        "This back-end application focused on Object Oriented Programming (OOP) and Test Driven Development (TDD). It is uses the command line to accept user input and populates a corresponding HTML page.",
      languages: ["Jest", "Express", "Node.js"],
      url: "",
      github: "https://github.com/AHudg/ProfileBuilder-Team-Management",
    },
    {
      id: 7,
      name: "Oh, The Weather Outside Is",
      description:
        "This front end application uses server API calls to populate the weather forecast based on cities. It allows the user to save the queries for future reference.",
      languages: ["JQuery", "Foundation CSS", "Open Weather Server API"],
      url: "https://ahudg.github.io/oh-the-weather-outside-is/",
      github: "https://github.com/AHudg/oh-the-weather-outside-is",
    },
  ];

  // callback function triggered when click occurs
  const toggleModal = (project, i) => {
    // calls setter to push specific project to selectedProject variable
    // TODO: WHY DO THE ...project? is it because I'm adding that i?
    setSelectedProject({ ...project, i: i });
    // setter returns the opposite of the current variable state
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="row justify-content-center">
      {/* conditional statement- if isModalOpen is a truthy, populate the following code (open the modal) */}
      {isModalOpen && (
        <Modal onClose={toggleModal} selectedProject={selectedProject}></Modal>
      )}
      {/* iterate through the array w/ each project and display contents */}
      {projectInfo.map((project, i) => (
        <img
          src={require(`../../assets/portfolio/${i}.png`)}
          alt={project.name}
          className="col-10 col-md-5 m-2"
          onClick={() => toggleModal(project, i)}
          // why do you need a key here?
          key={project.name}
        />
      ))}
    </div>
  );
}
