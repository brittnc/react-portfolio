import React from "react";
import self from "../images/self-portrait.png";

export default function About() {
  return (
    <div>
      <section id="about">
        <img id="selfImg" src={self} alt="me"></img>
        <div className="bio">
          <h1 className="opening-line">
          Hello! My name is Brittneylynn Crosby, and I'm a Web Developer in located NC.
          </h1>
          <p className="aboutPara">
          I am a Full Stack Web Developer educated in the Full Stack Web Development from the University of Chapel Hill. With skills in UX/UI, HTML, CSS, JavaScript, responsive web design and ES6. I am Currently working at Old Navy as an Assistant Manager of Merch, seeking a career change!
          </p>

          <p className="aboutPara">
          Currently attending the Coding Bootcamp at University of North Carolina at Chapel Hill to become a Full Stack Developer. I am excited to further enhance my skills in future as part of a fast-paced, quality-driven team in order to build better experience for users on the web.
          </p>
        </div>
      </section>
    </div>
  );
}