'use strict';

const questionsList = [
    {
        text: `How many endings are there in Hollow Knight?`,
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        feedbackImg: `https://vignette.wikia.nocookie.net/hollowknight/images/1/12/B_Hollow_Knight.png/revision/latest?cb=20170412204859`
    },
    
    {
        text: `What is the max completion percentage you can get?`,
        first: `100%`,
        second: `105%`,
        third: `112%`,
        fourth: `115%`,
        feedbackImg: `https://vignette.wikia.nocookie.net/hollowknight/images/1/17/B_Grey_Prince_Zote.png/revision/latest?cb=20170803164547`
    },

    {
        text: `How many Pantheons are there in the Godmaster update?`,
        first: 6,
        second: 5,
        third: 4,
        fourth: 3,
        feedbackImg: `https://vignette.wikia.nocookie.net/hollowknight/images/d/d2/Godseeker.png/revision/latest?cb=20180824141951`
    },

    {
        text: `How many main areas (where you can buy a map) are there?`,
        first: 15,
        second: 17,
        third: 10,
        fourth: 12,
        feedbackImg: `https://vignette.wikia.nocookie.net/hollowknight/images/f/ff/Cornifer.png/revision/latest?cb=20170330135557`
    },

    {
        text: `When was Hollow Knight initially released?`,
        first: `February 24, 2017`,
        second: `October 19, 2016`,
        third: `June 5, 2017`,
        fourth: `January 20 2016`,
        feedbackImg: `https://vignette.wikia.nocookie.net/hollowknight/images/1/16/Knight_Action.png/revision/latest/scale-to-width-down/179?cb=20190405190848`
    },

    {
        text: `Who wrote the music for Hollow Knight?`,
        first: `Hanz Zimmer`,
        second: `Christopher Larkin`,
        third: `Masafumi Takada`,
        fourth: `Disasterpeace`,
        feedbackImg: `https://vignette.wikia.nocookie.net/hollowknight/images/d/d5/Marissa.png/revision/latest/scale-to-width-down/150?cb=20170419124946`
    },

    {
        text: `What is the name of the Hollow Knight sequel?`,
        first: `Hollow Knight: Godmaster`,
        second: `Hollow Knight: Hidden Dreams`,
        third: `Hollow Knight: The Grimm Troup`,
        fourth: `Hollow Knight: Silk Song`,
        feedbackImg: `https://vignette.wikia.nocookie.net/vsbattles/images/e/e9/SSHornet.png/revision/latest?cb=20190323075239`
    },

    {
        text: `How many free DLCs were released?`,
        first: 2,
        second: 6,
        third: 4,
        fourth: 8,
        feedbackImg: `https://vignette.wikia.nocookie.net/hollowknight/images/5/5b/B_Grimm.png/revision/latest?cb=20180830225120`
    },

    {
        text: `Who is the great Nailsage?`,
        first: `Sly`,
        second: `Sheo`,
        third: `Oro`,
        fourth: `Mato`,
        feedbackImg: `https://orig00.deviantart.net/e795/f/2017/125/1/e/untitled_by_ashlynnii-db88ss5.png`
    },

    {
        text:`How many times can you talk to Mister Mushroom?`,
        first: 0,
        second: 1,
        third: 3,
        fourth: 7,
        feedbackImg: `https://vignette.wikia.nocookie.net/hollowknight/images/f/fc/Mister_Mushroom.png/revision/latest?cb=20170430205347`
    }

];

const answers = [
    3,
    `112%`,
    5,
    12,
    `February 24, 2017`,
    `Christopher Larkin`,
    `Hollow Knight: Silk Song`,
    4,
    `Sly`,
    7
]

let questionNumber = 0;

let trueQuestionNumber = 1;

let correct = 0;

function renderQuestion() {
    return `
    <div class = 'quizBody'>
    <header>
        <div>
            <img class = 'header' src = 'https://images.mir.pe/file/4688e0016285b78f7de65740a20aca19cbe6947872044b2746511225f3911277' alt = 'Hollow Knight'/>
        </div>
        <div class = 'stats'>
            <ul>
                <li>
                    <img class = 'headerPics' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/8/81/Full_Soul_Vessel.png/revision/latest/scale-to-width-down/100?cb=20170508211616' alt = 'soul' />
                        Question ${trueQuestionNumber} /10
              
                </li>
                <li>
                    <img class = 'headerPics' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/1/1b/Mask-Shard.png/revision/latest/scale-to-width-down/75?cb=20170416183614' alt = 'mask' />
                     ${correct} Correct
                </li>
            </ul>
        </div>
    </header>
    <main>
    <div class = 'quiz'>
        <h2> ${questionsList[questionNumber].text} </h2>
        <form>
            <fieldset>
              <label>
                    <input type = 'radio' name = 'answer' value = '${questionsList[questionNumber].first}' required>${questionsList[questionNumber].first}</input>
              </label>
              <label>
                    <input type = 'radio' name = 'answer' value = '${questionsList[questionNumber].second}' required>${questionsList[questionNumber].second}</input>
              </label>
              <label>
                    <input type = 'radio' name = 'answer' value = '${questionsList[questionNumber].third}' required>${questionsList[questionNumber].third}</input>
              </label> 
              <label> 
                    <input type = 'radio' name = 'answer' value = '${questionsList[questionNumber].fourth}' required>${questionsList[questionNumber].fourth}</input>
              </label>
                <button type = 'submit' class = 'submitAnswer'>Submit</button>
            </fieldset> 
        </form>
    </div>
    </main>
    </div>`;
};


function handleStart() {
    $('.start').on('click', '.startButton', function(event) {
        $('.quizBody').html(renderQuestion());
    });
}

function handleSubmit() {
    $('.quizBody').submit(function(event) {
        event.preventDefault();
        let chosen = $('input[name=answer]:checked');
        let chosenAnswer = chosen.val();
        let correctAnswer = `${answers[questionNumber]}`;
    if (chosenAnswer === correctAnswer) {
          correct ++;
          $('.quizBody').html(`
  <div class = 'quizBody'>
  <header>
        <div>
            <img class = 'header' src = 'https://images.mir.pe/file/4688e0016285b78f7de65740a20aca19cbe6947872044b2746511225f3911277' alt = 'Hollow Knight'/>
        </div>
        <div class = 'stats'>
            <ul>
                <li>
                    <img class = 'headerPics' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/8/81/Full_Soul_Vessel.png/revision/latest/scale-to-width-down/100?cb=20170508211616' alt = 'soul' />
                        Question ${trueQuestionNumber} /10
                </li>
                <li>
                    <img class = 'headerPics' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/1/1b/Mask-Shard.png/revision/latest/scale-to-width-down/75?cb=20170416183614' alt = 'mask' />
                     ${correct} Correct
                </li>
            </ul>
        </div>
    </header>
    <main>
  <div class = 'feedback'>
  <img class = 'goodFeedback' src = '${questionsList[questionNumber].feedbackImg}' alt = 'feedback img'>
  <h1>Great Job!</h1>
  <p> ${answers[questionNumber]} is the correct answer! </p>
  <button type = 'button' class = 'next'>Next Question</button>
  </div>
  </main>
  </div>
  `);
    } else {
        $('.quizBody').html(`
  <div class = 'quizBody'>
  <header>
        <div>
            <img class = 'header' src = 'https://images.mir.pe/file/4688e0016285b78f7de65740a20aca19cbe6947872044b2746511225f3911277' alt = 'Hollow Knight'/>
        </div>
        <div class = 'stats'>
            <ul>
                <li>
                    <img class = 'headerPics' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/8/81/Full_Soul_Vessel.png/revision/latest/scale-to-width-down/100?cb=20170508211616' alt = 'soul' />
                        Question ${trueQuestionNumber} /10
                </li>
                <li>
                    <img class = 'headerPics' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/1/1b/Mask-Shard.png/revision/latest/scale-to-width-down/75?cb=20170416183614' alt = 'mask' />
                     ${correct} Correct
                </li>
            </ul>
        </div>
    </header>
    <main>
  <div class = 'feedback'>
  <img class = 'negative' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/3/30/B_Broken_Vessel-2.png/revision/latest?cb=20180821144714' alt = 'feedback img'>
  <h1>Oh no...</h1>
  <p> You answered ${chosenAnswer}, but ${answers[questionNumber]} is actually the correct answer. </p>
  <button type = 'button' class = 'next'>Next Question</button>
  </div>
  </main>
  </div>
  `);
    } });
};


function handleNext() {
  $('.quizBody').on('click', '.next', function(event) {
    questionNumber ++;
    trueQuestionNumber ++;
    if (trueQuestionNumber <= questionsList.length) {
      $('.quizBody').html(renderQuestion());
    } else {
      $('.quizBody').html(scorePage());
    }
  })
}

function scorePage () {
  return `
  <div class = 'quizBody'>
  <header>
        <div>
            <img class = 'header' src = 'https://images.mir.pe/file/4688e0016285b78f7de65740a20aca19cbe6947872044b2746511225f3911277' alt = 'Hollow Knight'/>
        </div>
        <div class = 'stats'>
            <ul>
                <li>
                    <img class = 'headerPics' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/8/81/Full_Soul_Vessel.png/revision/latest/scale-to-width-down/100?cb=20170508211616' alt = 'soul' />
                        Question 10/10
                </li>
                <li>
                    <img class = 'headerPics' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/1/1b/Mask-Shard.png/revision/latest/scale-to-width-down/75?cb=20170416183614' alt = 'mask' />
                     ${correct} Correct
                </li>
            </ul>
        </div>
    </header>
    <main>
  <div class = 'finalScore'>
  <img class = 'goodFeedback' src = 'https://vignette.wikia.nocookie.net/hollowknight/images/5/52/B_Radiance.png/revision/latest?cb=20170412205005' alt = 'The Radiance'>
  <h1>How did you do?</h1>
  <p>You got ${correct} questions right!</p>
  <p>Want to try again?</p>
  <button type = 'button' class = 'restart'>Restart Quiz</button>
  </div>
  </main>
  </div>`
}

function handleRestart() {
  $('.quizBody').on('click', '.restart', function(event){
    location.reload();
  });
}


function quiz() {
    handleStart();
    handleSubmit();
    handleRestart();
    handleNext();
}

$(quiz);