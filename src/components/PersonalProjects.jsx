import React from 'react';

// Media
import materielle from "../assets/materielle-frame.svg";

function PersonalProjects() {
  return (
    <div className="personal-projects">
      <div className="personal-projects__text-div">
        <h2 className="personal-projects__heading">Personal projects</h2>
        <p className="personal-projects__p">A showcase of my technical capabilities & conceptual creativeness! These projects are my exploration of the limitless potential for connection & creativitity that coding enables us to have.</p>
      </div>

      <div className="personal-projects__projects-container">
          <div className="personal-projects__project-div">
            <img className="personal-projects__img" src={materielle} alt="iPhone mockup of Materielle project" />

            <div className="personal-projects__hover-info hide">
                <p className="personal-projects__p"></p>
                <button className="personal-projects__btn">Check it out</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PersonalProjects
