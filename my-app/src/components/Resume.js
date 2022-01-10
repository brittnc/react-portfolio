import React from "react";

import resume from "../images/CodyKtestakisResume.pdf";

export default function Resume() {
  return (
    <>
      <section id="resume">
        <div className="border1">
          <div className="border2">
            <div className="border3">
              <h1 className="resTitle">Resume</h1>
              <p>
                Download <a href={resume}>Resume</a>
              </p>

              <h2 className="profTitle">Languages</h2>
              <ul>
                <li>JavasScript ES6+</li>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>SQL</li>
                <li>NoSQL</li>

                <h2 className="profTitle">Applications</h2>
                <li>GitHub</li>
                <li>MongoDb</li>
                <li>MySQL</li>

                <h2 className="profTitle">Tools</h2>
                <li>Express</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Handlebars</li>
                <li>Query</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}