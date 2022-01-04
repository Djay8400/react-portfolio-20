import React from "react";

export default function Project({ work }) {
  return (
    <div>
      {work.map((item) => (
        <div className="column" key={item.id}>
          {item.title}
          <div
            id="bigCard"
            // onClick="location.href={item.deployed}"
            // style="cursor: pointer"
          >
            <img className="project" src={item.image} alt="live concert" />
          </div>
          <a href={item.repo} className="gitLinked">
            Github Repo
          </a>
        </div>
      ))}
    </div>
  );
}
