import React from 'react';

// Media
import stayNz from "../assets/stay-nz-frame.svg";

function SchoolProjects() {
  return (
    <div className="school-projects">
      <div className="school-projects__text-div">
        <h2 className="school-projects__heading">School projects</h2>
        <p className="school-projects__p">These projects are a benchmark for how far I’ve come in my personal learning. The syllabus didn't include React or Redux, so these projects work with vanilla JavaScript & jQuery.</p>
      </div>

      <div className="school-projects__projects-container">
          <div className="school-projects__project-div">
            <img className="school-projects__img" src={stayNz} alt="iPhone mockup of Stay NZ project" />

            <div className="school-projects__hover-info hide">
                <p className="school-projects__p"></p>
                <button className="school-projects__btn">Check it out</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SchoolProjects;
