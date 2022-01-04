// - Resume Section
// 	-Downloadable resume link and list of skills/badges

import React from "react";
import resume from "../../assets/Resume-David-Jay.pdf";

function Resume() {
  return (
    <div>
      <h2>Programming Languages and Frameworks That I Am Proficient In</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
        <li>Foundation</li>
        <li>Tailwind</li>
        <li>JQuery</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>IndexedDB</li>
        <li>Node.JS</li>
        <li>Express.JS</li>
        <li>React.JS</li>
        <li>Redux</li>
      </ul>
      <a href={resume} className="gitLinked">
        My Resume
      </a>
    </div>
  );
}

export default Resume;
