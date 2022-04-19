import React, { useState } from 'react';
import $ from 'jquery';

function EmojiMadlibs() {
    const [emojiOneClasses, setEmojiOneClasses] = useState('madlibs-game__emojis');
    const [emojiTwoClasses, setEmojiTwoClasses] = useState('madlibs-game__emojis hide'); 
    const [emojiThreeClasses, setEmojiThreeClasses] = useState('madlibs-game__emojis hide'); 
    const [emojiFourClasses, setEmojiFourClasses] = useState('madlibs-game__emojis hide'); 
    const [emojiFiveClasses, setEmojiFiveClasses] = useState('madlibs-game__emojis hide');  
    const [emojiRunClasses, setEmojiRunClasses] = useState('madlibs-game__emojis hide'); 
    const [emojiPregnantClasses, setEmojiPregnantClasses] = useState('madlibs-game__emojis hide'); 
    
    const [storyPartOne, setStoryPartOne] = useState('madlibs-game__story');
    const [storyPartTwo, setStoryPartTwo] = useState('madlibs-game__story hide');
    const [storyPartThree, setStoryPartThree] = useState('madlibs-game__story hide');
    const [storyPartFour, setStoryPartFour] = useState('madlibs-game__story hide');
    const [storyPartFive, setStoryPartFive] = useState('madlibs-game__story hide');
    const [storyPartSixKiss, setStoryPartSixKiss] = useState('madlibs-game__story hide');
    const [storyPartSixRun, setStoryPartSixRun] = useState('madlibs-game__story hide');

    const [fairyPrinceName, setFairyPrinceName] = useState('');
    const [magicPower, setMagicPower] = useState('');
    const [frogName, setFrogName] = useState('');

    const [inputOneClasses, setInputOneClasses] = useState('');
    const [inputTwoClasses, setInputTwoClasses] = useState('');
    const [inputThreeClasses, setInputThreeClasses] = useState('');
    const [inputFourClasses, setInputFourClasses] = useState('');

    const input = document.querySelector('.input');
    const inputTwo = document.querySelector('.input2');
    const inputThree = document.querySelector('.input3');
    const inputFour = document.querySelector('.input4');

    const emojiOne = document.querySelector('.img1');
    const emojiTwo = document.querySelector('.img2');
    const emojiThree = document.querySelector('.img3');
    const emojiFour = document.querySelector('.img4');
    const emojiFive = document.querySelector('.img5');
    const emojiRun = document.querySelector('.img-run');
    const emojiKiss = document.querySelector('.img-kiss');

    const storyOne = document.querySelector('.story-p1');
    const storyTwo = document.querySelector('.story-p2');
    const storyThree = document.querySelector('.story-p3');
    const storyFour = document.querySelector('.story-p4');
    const storyFive = document.querySelector('.story-p5');
    const storyKiss = document.querySelector('.story-kiss');
    const storyRun = document.querySelector('.story-run');

    function ontoPartTwo() {
        if(fairyPrinceName !== "") {
            setEmojiOneClasses('madlibs-game__emojis hide');
            setEmojiTwoClasses('madlibs-game__emojis');

            setStoryPartOne('madlibs-game__emojis hide');
            setStoryPartTwo('madlibs-game__emojis');
        }
    }

    function ontoPartThree() {
        setEmojiTwoClasses('madlibs-game__emojis hide');
        setEmojiThreeClasses('madlibs-game__emojis');

        setStoryPartTwo('madlibs-game__emojis hide');
        setStoryPartThree('madlibs-game__emojis');
    }

    function ontoPartFour() {
        setEmojiThreeClasses('madlibs-game__emojis hide');
        setEmojiFourClasses('madlibs-game__emojis');

        setStoryPartThree('madlibs-game__emojis hide');
        setStoryPartFour('madlibs-game__emojis');
    }

    function ontoPartFive() {
        setEmojiFourClasses('madlibs-game__emojis hide');
        setEmojiFiveClasses('madlibs-game__emojis');

        setStoryPartFour('madlibs-game__emojis hide');
        setStoryPartFive('madlibs-game__emojis');
    }

    function ontoRunFinale() {
        setEmojiFiveClasses('madlibs-game__emojis hide');
        setEmojiRunClasses('madlibs-game__emojis');

        setStoryPartFive('madlibs-game__emojis hide');
        setStoryPartSixRun('madlibs-game__emojis');
    }

    function ontoKissFinale() {
        setEmojiFiveClasses('madlibs-game__emojis hide');
        setEmojiPregnantClasses('madlibs-game__emojis');

        setStoryPartFive('madlibs-game__emojis hide');
        setStoryPartSixKiss('madlibs-game__emojis');
    }

    return (
        <>
            <div className="modal__text-div" id="modalText">
                <h1 className="modal__heading">Emoji Mad Libs</h1>
                <p className="modal__light-p">Nov 2021</p>
                {/* <p className="modal__p">I've kept most of the original code for this game, errors and all. The mistakes ended up being the funniest part of the game, and incidentally my first programmer joke.</p> */}
            </div>

            <div className="madlibs-game" id="modalGame">
                <div className="madlibs-game__emoji-div">
                    <p className={emojiOneClasses}>🧚🏼‍♂️👑</p>
                    <p className={emojiTwoClasses}>🔮✨</p>
                    <p className={emojiThreeClasses}>✨⛰️</p>
                    <p className={emojiFourClasses}>🐸</p>
                    <p className={emojiFiveClasses}>🐸💬</p>
                    <p className={emojiRunClasses}>🏃💨</p>
                    <p className={emojiPregnantClasses}>🤰</p>
                </div>
                <div className="madlibs-game__text">
                    <div className={storyPartOne}>
                        <p className="madlibs-game__story">Once upon a time there lived a fairy prince called...</p>

                        <form className="madlibs-game__input-div">
                            <input className="madlibs-game__input" type="text" autoComplete="off" onChange={e => setFairyPrinceName(e.target.value)} required />
                            <button className="madlibs-game__arrow-emoji" type="submit" onClick={ontoPartTwo}>➡️</button>
                        </form>
                        
                    </div>
                    
                    <div className={storyPartTwo}>
                        <p className="madlibs-game__story madlibs-game__text2">{fairyPrinceName}'s magic power was...</p>

                        <form className="madlibs-game__input-div">
                            <input className="madlibs-game__input" type="text" autoComplete="off" onChange={e => setMagicPower(e.target.value)} required />
                            <button className="madlibs-game__arrow-emoji" type="submit" onClick={ontoPartThree}>➡️</button>
                        </form>
                    </div>
                    
                    <div className={storyPartThree}>
                        <p className="madlibs-game__story madlibs-game__text3">{fairyPrinceName} was the most talented at {magicPower} in all the land!</p>

                        <p className="madlibs-game__arrow-emoji" onClick={ontoPartFour}>➡️</p>
                    </div>
                    
                    <div className={storyPartFour}>
                        <p className="madlibs-game__story">One day {fairyPrinceName} was approached by a frog named...</p>

                        <form className="madlibs-game__input-div">
                            <input className="madlibs-game__input madlibs-game__input4" type="text" autoComplete="off" onChange={e => setFrogName(e.target.value)} required />
                            <button className="madlibs-game__arrow-emoji" type="submit" onClick={ontoPartFive}>➡️</button>
                        </form>
                    </div>

                    <div className={storyPartFive}>
                        <p className="madlibs-game__story">{frogName} pleaded with {fairyPrinceName}, "Great fairy prince, I need your magnificent {magicPower} skills to help me turn back into a person!"</p>
                        <button className="endBtn" onClick={ontoRunFinale}>🏃</button>
                        <button className="endBtn" onClick={ontoKissFinale}>👄</button>
                    </div>

                    <div className={storyPartSixRun}>
                        <button>Reset Game</button>
                    </div>

                    <div className={storyPartSixKiss}>
                        <p className="madlibs-game__story">That escalated quicky...</p>

                        <button>Reset Game</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default EmojiMadlibs
