import React, { useState } from 'react';
import $ from 'jquery';

function EmojiMadlibs() {
    const [name, setName] = useState('');
    const [magicPower, setmagicPower] = useState('');

    const [emojiOneClasses, setEmojiOneClasses] = useState('madlibs-game__emojis');
    const [emojiTwoClasses, setEmojiTwoClasses] = useState('madlibs-game__emojis hide'); 
    const [emojiThreeClasses, setEmojiThreeClasses] = useState('madlibs-game__emojis hide'); 
    const [emojiFourClasses, setEmojiFourClasses] = useState('madlibs-game__emojis hide'); 
    const [emojiFiveClasses, setEmojiFiveClasses] = useState('madlibs-game__emojis hide');  
    const [emojiRunClasses, setEmojiRunClasses] = useState('madlibs-game__emojis hide'); 
    const [emojiPregnantClasses, setEmojiPregnantClasses] = useState('madlibs-game__emojis hide');  

    // const [inputOneClasses, setInputOneClasses] = useState('');
    // const [inputTwoClasses, setInputTwoClasses] = useState('');
    // const [inputThreeClasses, setInputThreeClasses] = useState('');
    // const [inputFourClasses, setInputFourClasses] = useState('');

    // const input = document.querySelector('.input');
    // const inputTwo = document.querySelector('.input2');
    // const inputThree = document.querySelector('.input3');
    // const inputFour = document.querySelector('.input4');

    // const emojiOne = document.querySelector('.img1');
    // const emojiTwo = document.querySelector('.img2');
    // const emojiThree = document.querySelector('.img3');
    // const emojiFour = document.querySelector('.img4');
    // const emojiFive = document.querySelector('.img5');
    // const emojiRun = document.querySelector('.img-run');
    // const emojiKiss = document.querySelector('.img-kiss');

    const storyOne = document.querySelector('.story-p1');
    const storyTwo = document.querySelector('.story-p2');
    const storyThree = document.querySelector('.story-p3');
    const storyFour = document.querySelector('.story-p4');
    const storyFive = document.querySelector('.story-p5');
    const storyKiss = document.querySelector('.story-kiss');
    const storyRun = document.querySelector('.story-run');

    function nextPage(){
        if(emojiOne.classList.contains('active')){
            console.log('function')
            emojiTwo.classList.add('active');
            emojiOne.classList.remove('active');
            storyTwo.classList.add('active');
            storyOne.classList.remove('active');
            $('.text2').append(
                `
                ${name}'s magic power was...
                `
            )
        } else if(emojiThree.classList.contains('active')){
            emojiFour.classList.add('active');
            emojiThree.classList.remove('active');
            storyFour.classList.add('active');
            storyThree.classList.remove('active');

            $('.text4').append(
                `
                One day he was approached by a frog named...
                `
            )
        } else if(emojiFour.classList.contains('active')){
            emojiFive.classList.add('active');
            emojiFour.classList.remove('active');
            storyFive.classList.add('active');
            storyFour.classList.remove('active');
            $('.text5').append(
                `
                "Great fairy prince, I need your magnificent ${magicPower} skills to help me turn back into a person!"
                `
            )
        }
    }

    function mostTalented(magicPower){
        console.log('most talented');
        emojiThree.classList.add('active');
        emojiTwo.classList.remove('active');
        storyThree.classList.add('active');
        storyTwo.classList.remove('active');
        $('.story-p3').append(
            `
            <p class="story text3">He was the most talented at ${magicPower} in all the land!</p>
            `
        )
    }

    function kissMe(){
        emojiKiss.classList.add('active');
        emojiFive.classList.remove('active');
        storyKiss.classList.add('active');
        storyFive.classList.remove('active');
    }

    function runAway(){
        emojiRun.classList.add('active');
        emojiFive.classList.remove('active');
        storyRun.classList.add('active');
        storyFive.classList.remove('active');
    }

    function onKeyUp(e) {
        if (e.charCode === 13) {
            console.log('13 clicked');
            var name = document.getElementById('inputOne').value;
            nextPage(name);
        }
    }

    // input.addEventListener('keyup', function(event){
    //     if(event.keyCode === 13){
    //         event.preventDefault();
    //         var name = document.getElementById('inputOne').value;
    //         nextPage(name);
    //     };
    // });

    // inputTwo.addEventListener('keyup', function(event){
    //     if(event.keyCode === 13){
    //         event.preventDefault();
    //         var magicPower = document.getElementById('inputTwo').value;
    //         nextPage(null, magicPower);
    //         mostTalented(magicPower);
    //     };
    // });

    // inputFour.addEventListener('keyup', function(event){
    //     if(event.keyCode === 13){
    //         event.preventDefault();
    //         var frogName = document.getElementById('inputFour').value;
    //         nextPage(frogName);
    //     };
    // });

    return (
        <>
            <div className="modal__text-div" id="modalText">
                <h1 className="modal__heading">Emoji Mad Libs</h1>
                <p className="modal__light-p">Nov 2021</p>
                <p className="modal__p">I've kept most of the original code for this game, errors and all. The mistakes ended up being the funniest part of the game, and incidentally my first programmer joke.</p>
            </div>

            <div className="madlibs-game" id="modalGame">
                <div className="madlibs-game__emoji-div">
                    <p className={emojiOneClasses}>🧚🏼‍♂️👑</p>
                    <p className={emojiTwoClasses}>🔮✨</p>
                    <p className={emojiThreeClasses} id="button" onClick={nextPage}>✨⛰️</p>
                    <p className={emojiFourClasses}>🐸</p>
                    <p className={emojiFiveClasses}>🐸💬</p>
                    <p className={emojiRunClasses}>🏃💨</p>
                    <p className={emojiPregnantClasses}>🤰</p>
                </div>
                <div className="madlibs-game__text">
                    <div className="madlibs-game__story madlibs-game__story-p1 madlibs-game__active">
                        <p className="madlibs-game__story madlibs-game__text1">Once upon a time there lived a fairy prince called...</p>
                        <input className="madlibs-game__input madlibs-game__input1" type="text" name="" id="inputOne" autoComplete="off" onKeyPress={(e) => onKeyUp(e)} />
                    </div>
                    
                    <div className="madlibs-game__story madlibs-game__story-p2">
                        <p className="madlibs-game__story madlibs-game__text2"></p>
                        <input className="madlibs-game__input madlibs-game__input2" type="text" name="" id="inputTwo" autoComplete="off" />
                    </div>
                    
                    <div className="madlibs-game__story madlibs-game__story-p3">
                        <p className="madlibs-game__story madlibs-game__text3"></p>
                    </div>
                    
                    <div className="madlibs-game__story madlibs-game__story-p4">
                        <p className="madlibs-game__story madlibs-game__text4"></p>
                        <input className="madlibs-game__input madlibs-game__input4" type="text" name="" id="inputFour" autoComplete="off" />
                    </div>

                    <div className="madlibs-game__story madlibs-game__story-p5">
                        <p className="madlibs-game__story madlibs-game__text5"></p>
                        <button className="endBtn" id="runBtn" onClick={runAway}>🏃</button>
                        <button className="endBtn" id="kissBtn" onClick={kissMe}>👄</button>
                    </div>

                    <div className="madlibs-game__story madlibs-game__story-run">
                        
                    </div>

                    <div className="madlibs-game__story madlibs-game__story-kiss">
                        <p>That escalated quicky...</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default EmojiMadlibs
