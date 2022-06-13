import React from 'react'

// Media
import bigStar from '../assets/big-star.svg';
import smallStar from '../assets/small-star.svg';
import bigStarYellow from '../assets/big-star-yellow.svg';
import smallStarYellow from '../assets/small-star-yellow.svg';

function ArcadeIntro() {
  return (
    <div className="arcade">
      <div className="arcade__intro">
        <h2 className="arcade__heading">Arcade</h2>
        <p className="arcade__p">
        Founder and president of the Coding Games Club at Yoobee! I wanted to create a space where students could have fun with their code and get creative: somewhere to explore code without parameters (coding joke haha).
        <br />
        <br />
        When I first started learning Javascript, I started making little games in my spare time to help me understand its logic and structure. These little games became the building blocks for my coding foundation!
        </p>

        <div className="arcade__top-right-star-div">
          <img className="arcade__big-star-tr arcade__twinkle" src={bigStar} alt="star icon" />
          <img className="arcade__small-star-one-tr arcade__twinkle" src={smallStar} alt="star icon" />
          <img className="arcade__small-star-two-tr arcade__twinkle" src={smallStar} alt="star icon" />
        </div>

        <div className="arcade__top-right-star-div-yellow">
          <img className="arcade__big-star-tr arcade__twinkle" src={bigStarYellow} alt="star icon" />
          <img className="arcade__small-star-one-tr arcade__twinkle" src={smallStarYellow} alt="star icon" />
          <img className="arcade__small-star-two-tr arcade__twinkle" src={smallStarYellow} alt="star icon" />
        </div>
      </div>
    </div>
  )
}

export default ArcadeIntro
