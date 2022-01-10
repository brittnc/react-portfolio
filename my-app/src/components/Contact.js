import React from "core-js/library/fn/reflect/es7/metadata";

export default function Contact() {
  return (
    <>
      <div className="contactInfoCont">
        <div className="border1C">
          <div className="border2C">
            <div className="border3C">
              <h1>Contact Info</h1>
              <ul className="contactU1">
                <li className="contactLi"> 801-580-8581</li>
                <li className="contactLi">
                  <a
                    className="contactLiLink"
                    href="mailto:codyktestakis@gmail.com"
                  >
                    {" "}
                    Email Me
                  </a>
                </li>
                <li className="contactLi">
                  <a
                    className="contactLiLink"
                    href="https://www.linkedin.com/in/cody-ktestakis/"
                  >
                    {" "}
                    LinkedIn
                  </a>
                </li>
                <li className="contactLi">
                  <a
                    className="contactLiLink"
                    href="https://github.com/Cktestakis"
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