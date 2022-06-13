import React from 'react';

// Media
import earthenwaresSquare from "../assets/earthenwares-square.png";
import peruseSquare from "../assets/peruse-square.png";
import stayNzSquare from "../assets/stay-nz-square.png";
import theTaxLadySquare from "../assets/theTaxLady-square.png";
import bigStar from '../assets/big-star.svg';
import smallStar from '../assets/small-star.svg';
import bigStarYellow from '../assets/big-star-yellow.svg';
import smallStarYellow from '../assets/small-star-yellow.svg';

function SchoolProjects() {

  const showProjectInfo = (id) => {
    console.log("hover");
    document.getElementById(id).classList.remove("hide");
  }

  const hideProjectInfo = (id) => {
    document.getElementById(id).classList.add("hide");
  }

  return (
    <div className="school-projects">
      <div className="school-projects__text-div">
        <h2 className="school-projects__heading">School projects</h2>
        <p className="school-projects__p">These projects are a benchmark for how far I’ve come in my personal learning. The syllabus didn't include React or Redux, so these projects work with vanilla JavaScript & jQuery.</p>

        {/* <div className="school-projects__bottom-left-star-div">
          <img className="school-projects__big-star-bl school-projects__twinkle" src={bigStar} alt="star icon" />
          <img className="school-projects__small-star-one-bl school-projects__twinkle" src={smallStar} alt="star icon" />
          <img className="school-projects__small-star-two-bl school-projects__twinkle" src={smallStar} alt="star icon" />
        </div> */}
      </div>

      <div className="school-projects__projects-container">

        <div className="school-projects__project-div school-projects__project-div-p-b" id="earthenwaresLaptop" onMouseOver={() => showProjectInfo("earthenwaresInfo")} onMouseOut={() => hideProjectInfo("earthenwaresInfo")}>
          <img className="school-projects__img" src={earthenwaresSquare} alt="iPhone mockup of Stay NZ project" />

          <div className="school-projects__hover-info hide" id="earthenwaresInfo">
              <p className="school-projects__p">Student project - UX and coding (HTML, CSS, JavaScript).</p>
              <button className="school-projects__btn">Check it out</button>
          </div>
        </div>

        <div className="school-projects__project-div school-projects__project-div-o-p">
          <img className="school-projects__img" src={stayNzSquare} alt="iPhone mockup of Stay NZ website" />

          <div className="school-projects__hover-info hide">
              <p className="school-projects__p"></p>
              <button className="school-projects__btn">Check it out</button>
          </div>
        </div>

        <div className="school-projects__project-div school-projects__project-div-b-g">
          <img className="school-projects__img" src={peruseSquare} alt="iPhone mockup of Stay NZ project" />

          <div className="school-projects__hover-info hide">
              <p className="school-projects__p"></p>
              <button className="school-projects__btn">Check it out</button>
          </div>
        </div>

        <div className="school-projects__project-div school-projects__project-div-b-g">
          <img className="school-projects__img" src={theTaxLadySquare} alt="website mockup of The Tax website" />

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
