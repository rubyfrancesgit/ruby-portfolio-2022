import React from 'react';

// Media
import materielleSquare from "../assets/materielle-square.png";
import hobbiSquare from "../assets/hobbi-square.png";
import ableSwapSquare from "../assets/able-swap-square.png";
import bigStar from '../assets/big-star.svg';
import smallStar from '../assets/small-star.svg';
import bigStarYellow from '../assets/big-star-yellow.svg';
import smallStarYellow from '../assets/small-star-yellow.svg';

function PersonalProjects() {
  return (
    <div className="personal-projects">
      <div className="personal-projects__container">
        <div className="personal-projects__text-div">
          <h2 className="personal-projects__heading">Personal projects</h2>
          <p className="personal-projects__p">A showcase of my technical capabilities & conceptual creativeness! These projects are my exploration of the limitless potential for connection & creativitity that coding enables us to have.</p>
          
          {/* <div className="personal-projects__top-right-star-div">
            <img className="personal-projects__big-star-tr personal-projects__twinkle" src={bigStar} alt="star icon" />
            <img className="personal-projects__small-star-one-tr personal-projects__twinkle" src={smallStar} alt="star icon" />
            <img className="personal-projects__small-star-two-tr personal-projects__twinkle" src={smallStar} alt="star icon" />
          </div> */}
        </div>

        <div className="personal-projects__projects-container">
            <div className="personal-projects__project-div personal-projects__project-div-b-g">
              <img className="personal-projects__img" src={materielleSquare} alt="iPhone mockup of Materielle project" />

              <div className="personal-projects__hover-info hide">
                  <p className="personal-projects__p"></p>
                  <button className="personal-projects__btn">Check it out</button>
              </div>
            </div>

            <div className="personal-projects__project-div personal-projects__project-div-p-b">
              <img className="personal-projects__img" src={hobbiSquare} alt="iPhone mockup of Materielle project" />

              <div className="personal-projects__hover-info hide">
                  <p className="personal-projects__p"></p>
                  <button className="personal-projects__btn">Check it out</button>
              </div>
            </div>

            <div className="personal-projects__project-div personal-projects__project-div-o-p">
              <img className="personal-projects__img" src={ableSwapSquare} alt="iPhone mockup of Materielle project" />

              <div className="personal-projects__hover-info hide">
                  <p className="personal-projects__p"></p>
                  <button className="personal-projects__btn">Check it out</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalProjects
