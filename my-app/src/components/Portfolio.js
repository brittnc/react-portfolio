import React from "react";
import weatherDashboard from "../images/Weather-Dashboard.png";
import teamProfileGenerator from "../images/Team-Profile-Generator.png";
import workdayScheduler from "../images/Workday Scheduler.png";
import codeQuiz from "../images/Code Quiz Test.png";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    imageLink: weatherDashboard,
    title: "Weather Dashboard",
    description:
      "An Application to help users fnd weather information for different cities in the world. This will generate a 7 day forecast for that city.",
    role: "Sole Author",
    technologies: "Jquery, Open Weather API, Moment.js, JavaScript",
    websiteLink: "https://brittnc.github.io/WeatherDashboard/",
    gitLink: "https://github.com/brittnc/WeatherDashboard",
  },
  {
    imageLink: teamProfileGenerator,
    title: "Team Profile Generator",
    description:
      "Project was created command-line application using Node.js that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
    role: "Sole Author",
    technologies: "Javascript, MySql, Node.js, HTML",
    gitLink: "https://github.com/brittnc/TeamGenerator",
  },
  {
    imageLink: workdayScheduler,
    title: "Work Day Scheduler",
    description:
      "An Application is a daily planner to create a hourly schedule. The current day is displayed at the top of the Calendar. Followed by timeblocks for standard business hours. Each time block is color coded to indicate whether it is in the past(grey), present(red), or future(green)",
    role: "Sole Author",
    technologies: "HTML, CSS, Javascript",
    websiteLink: "https://brittnc.github.io/planner/",
    gitLink: "https://github.com/brittnc/planner",
  },
  {
    imageLink: codeQuiz,
    title: "Code Quiz",
    description:
      "A web app dedicated to helping you generate a strong password",
    role: "Sole Author",
    technologies: "HTML, CSS, Javascript",
    websiteLink: "https://brittnc.github.io/password/",
    gitLink: "https://github.com/brittnc/password",
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects">
        {projects.map(
          (
            {
              imageLink,
              title,
              description,
              role,
              technologies,
              websiteLink,
              gitLink,
            },
            index
          ) => {
            return (
              <ProjectCard
                key={index}
                imageLink={imageLink}
                title={title}
                description={description}
                role={role}
                technologies={technologies}
                websiteLink={websiteLink}
                gitLink={gitLink}
              />
            );
          }
        )}
      </section>
    </>
  );
}