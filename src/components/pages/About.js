import React from "react";

function About() {
  return (
    <div>
      <figure className="figure">
        <img
          src="./assets/20210807_183939.jpg"
          alt="man smiling"
          width="400px"
        />
      </figure>
      <article>
        <h2>Hello,</h2>
        <p>
          My name is David Jay and I am a Full-Stack Web Developer. <br />
          <br />
          This is a portfolio of my work.
          <br />
          <br />
          If you have any questions, please feel free to contact by any method
          listed at the bottom of the page.
          <br />
          <br />
          Thank you for having a look and I hope you have a great rest of your
          day.
        </p>
        <a href="https://github.com/Djay8400" className="gitLinked">
          My Github
        </a>
        <a
          href="https://www.linkedin.com/in/david-jay-06911a217/"
          className="gitLinked"
        >
          My LinkedIn
        </a>
        <a href="./assets/Resume-David-Jay.pdf" className="gitLinked">
          My Resume
        </a>
      </article>
    </div>
  );
}

export default About;
