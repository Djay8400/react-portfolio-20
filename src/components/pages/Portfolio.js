import React from "react";
import Project from "../Project";
import work from "../../work";

function Portfolio() {
  return (
    <div>
      <Project work={work} />
    </div>
  );
}

export default Portfolio;
