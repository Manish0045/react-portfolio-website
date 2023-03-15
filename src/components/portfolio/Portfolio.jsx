import React from "react";
import "./portfolio.css";
import { projects } from "../../data";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => (
          <article className="portfolio__item">
            <>
              <div className="portfolio__item-image">
                <img src={project.img} alt="FirstProject" />
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={project.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.dribble}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
