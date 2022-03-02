import React, { useState } from 'react'
import Nav from '../components/Nav'

// styles
import '../sass/style.scss';

function Arcade() {
    const modalBackground = document.getElementById("modalBackground");

    function launch8BallModal() {
        modalBackground.style.display = "block";
    } 

    function launchMadLibsModal() {
        modalBackground.style.display = "block";
    } 

    function clodeModal() {
        modalBackground.style.display = "none";
    }

    return (
        <>
            <div className="modal"></div>

            <div class="modal-background" id="modalBackground" onClick={clodeModal}></div>

            <Nav />
            <div className="right-page">
                <div className="arcade-info-section">
                    <h1 className="arcade-info-section__heading">‍👾 Arcade</h1>

                    <p className="arcade-info-section__middle-p">Come get your geek on!</p>

                    <p className="arcade-info-section__p">When I first started learning Javascript I felt overwhelmed trying to understand its logic and structure. It was a big step up from HTML & CSS! 
                    <br />
                    <br />
                    I started making little Javascript games in my spare time to practice using parameters and exploring various methods.
                    <br />
                    <br />
                    In the process I discovered how creative coding could be, and my fear soon turned into excitement.</p>
                </div>

                <div className="arcade">
                    <div className="arcade__card arcade__card-b-g" onClick={launch8BallModal}>
                        <p className="arcade__big-emoji">🎱</p>

                        <div className="arcade__text-div hide">
                            <p className="arcade__p">Magic 8 ball</p>
                            <button className="arcade__play-btn">Play</button>
                        </div>
                    </div>

                    <div className="arcade__card arcade__card-p-b" onClick={launchMadLibsModal}>
                        <p className="arcade__big-emoji">🐸</p>

                        <div className="arcade__text-div hide">
                            <p className="arcade__p">Emoji mad libs</p>
                            <button className="arcade__play-btn">Play</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Arcade
