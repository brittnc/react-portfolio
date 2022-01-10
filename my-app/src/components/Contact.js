import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contactInfoCont">
        <div className="border1C">
          <div className="border2C">
            <div className="border3C">
              <h1>Contact Info</h1>
              <ul className="contactU1">
                <li className="contactLi"> 907-519-8364</li>
                <li className="contactLi">
                  <a
                    className="contactLiLink"
                    href="mailto:brittneylynn@live.com"
                  >
                    {" "}
                    Email Me
                  </a>
                </li>
                <li className="contactLi">
                  <a
                    className="contactLiLink"
                    href="https://www.linkedin.com/in/brittneylynnc/"
                  >
                    {" "}
                    LinkedIn
                  </a>
                </li>
                <li className="contactLi">
                  <a
                    className="contactLiLink"
                    href="https://github.com/brittnc"
                  >
                    {" "}
                    Github
                  </a>
                </li>
                <li className="contactLi"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}