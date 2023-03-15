import React from "react";
import { BiCheck } from "react-icons/bi";
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer: </h5>
      <h2>Services: </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__header">
            <h3>UI/UX Design</h3>
          </div>

          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </div>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__header">
            <h3>Web Development</h3>
          </div>

          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </div>
        </article>
        {/* End of Web Development */}

        <article className="service">
          <div className="service__header">
            <h3>Backend Development</h3>
          </div>

          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </div>
        </article>
        {/* End of Backend Development */}

      </div>
    </section>
  );
};

export default Services;
