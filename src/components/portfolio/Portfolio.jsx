import React from "react";
import proj1 from "./proj.jpg";
import "./portfolio.css";

const data=[
  {
    id:1,
    img:proj1,
    title:'Interior Connect',
    github:'https://github.com',
    dribble:'https://dribbble.com/shots/20212408-NFT-marketplace'
  },
  {
    id:1,
    img:proj1,
    title:'Interior Connect',
    github:'https://github.com',
    dribble:'https://dribbble.com/shots/20212408-NFT-marketplace'
  },
  {
    id:1,
    img:proj1,
    title:'Interior Connect',
    github:'https://github.com',
    dribble:'https://dribbble.com/shots/20212408-NFT-marketplace'
  },
  {
    id:1,
    img:proj1,
    title:'Interior Connect',
    github:'https://github.com',
    dribble:'https://dribbble.com/shots/20212408-NFT-marketplace'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={proj1} alt="FirstProject" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/shots/20212408-NFT-marketplace"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
