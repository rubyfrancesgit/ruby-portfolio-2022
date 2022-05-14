import React from 'react';

// media
import nodeJS from '../assets/nodejs.svg'
import firebase from '../assets/firebase.svg'
import sass from '../assets/sass.svg'
import bootstrap from '../assets/bootstrap.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'

function ProgrammingToolbelt() {
  return (
    <div className="tool-belt">
        <p className="tool-belt__heading">My current programming tool belt includes...</p>

        <div className="tool-belt__container">
            <div className="tool-belt__icon-div">
                <div className="tool-belt__svg">
                    <svg className="tool-belt__rotate" viewBox="0 0 452 520">
                        <path fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                        <path fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37'/>
                        <path fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z'/>
                        <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z'/>
                    </svg>
                </div>

                <div className="tool-belt__svg">
                    <svg className="tool-belt__rotate" viewBox="0 0 452 520">
                        <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>
                        <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>
                        <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>
                        <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>
                    </svg>
                </div>

                <div className="tool-belt__svg">
                    <svg className="tool-belt__rotate" viewBox="0 0 452 520">
                        <path fill='RGB(12,115,184)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                        <path fill='RGB(48,169,220)' d='M 226,472 L 375,431 410,37 226,37'/>
                        <path fill='RGB(236,237,238)' d='M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z'/>
                        <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z'/>
                    </svg>
                </div>

                <img className="tool-belt__icon" src={nodeJS} alt="Node Javascript icon" />

                <img className="tool-belt__icon" src={react} alt="React icon" />

                <img className="tool-belt__icon" src={redux} alt="Redux icon" />

                <img className="tool-belt__icon" src={sass} alt="Sass icon" />

                <img className="tool-belt__icon" src={bootstrap} alt="Bootstrap icon" />

                <img className="tool-belt__icon" src={firebase} alt="Firebase icon" />
            </div>
        </div>
    </div>
  )
}

export default ProgrammingToolbelt
