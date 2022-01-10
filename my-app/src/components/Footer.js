import React from "react";

// import resume from '../images'  ADD RESUME

export default function Footer() {
  return (
    <>
      <footer id="contact" className="footerCont">
        <ul className="footerUl">
          <li className="footerLi">801-580-8581</li>
          <li className="footerLi footerLiLink">
            <a className="footerLiLink" href="mailto:codyktestakis@gmail.com">
              Email!
            </a>
          </li>
          <li className="footerLi">
            <a
              className="footerLiLink"
              href="https://www.linkedin.com/in/cody-ktestakis"
            >
              LinkedIn
            </a>
          </li>
          <li className="footerLi">
            <a className="footerLiLink" href="https://github.com/Cktestakis">
              GitHub
            </a>
          </li>
          <li className="footerLi">
            <a
              className="footerLiLink"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="footerLi">2022 Cody Ktestakis</li>
        </ul>
      </footer>
    </>
  );
}