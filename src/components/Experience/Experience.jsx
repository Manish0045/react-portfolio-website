import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  frontends, backends
} from "../../data";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have: </h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {frontends.map((techs) => (
              <>
                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{techs.title}</h4>
                    <small className="text-light">{techs.experience}</small>
                  </div>
                </article>
              </>
            ))}
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {backends.map((techs) => (
              <>
                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{techs.title}</h4>
                    <small className="text-light">{techs.experience}</small>
                  </div>
                </article>
              </>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Experience;
