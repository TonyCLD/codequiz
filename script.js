function startTimer()
// The timer begins
{
    var counter = 5;
      setInterval(function() {
        counter--;
          if (counter >= 0) {
          span = document.getElementById("count");
          span.innerHTML = counter;
          }
          if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
          }
      }, 1000);
    var questionsEl = document.querySelector('.wrap'); 
    console.log(questionsEl);

//Header, then question number for the quiz
    var quizHeaderEl = document.querySelector('.quizHeader');
    quizHeaderEl.innerHTML = 'Question number 1';

//Initial text, then quiz questions
    var initialTextEl = document.querySelector('#initialText')
    initialTextEl.innerHTML = 'Ben Brower played John Crichtion in sci-fi television show Farscape. In what city did he grow up?';
    console.log(initialTextEl);

//The Start button is first and rest are off, then the quiz buttons are turned on
    var startbuttonEl = document.querySelector('.startbutton');
    startbuttonEl.style.display = 'none';

//The main quiz buttons
    var a_buttonEl = document.querySelector('.a_button');
    a_buttonEl.style.display = 'unset';
    a_buttonEl.innerHTML = 'A: Charlotte, NC';

    var b_buttonEl = document.querySelector('.b_button');
    b_buttonEl.style.display = 'unset';
    b_buttonEl.innerHTML = 'B: Hollywood, CA';

    var c_buttonEl = document.querySelector('.c_button');
    c_buttonEl.style.display = 'unset';
    c_buttonEl.innerHTML = 'C: New York City';

    var d_buttonEl = document.querySelector('.d_button');
    d_buttonEl.innerHTML = 'D: Miami';
    d_buttonEl.style.display = 'unset';

//Variable photo with questions 
    var extrapixEl = document.querySelector('.extrapix');
    extrapixEl.style.display = 'unset';

}

function start()
{
      document.getElementById("count").style="color:red;";
      startTimer();
};

function nextQuestion(){
  console.log('Next Question was selected')

//This is question TWO-2-bitkUx
var quizHeaderEl = document.querySelector('.quizHeader');
quizHeaderEl.innerHTML = 'Question number 2';

//Initial text, then quiz questions
  var initialTextEl = document.querySelector('#initialText')
  initialTextEl.innerHTML = 'Claudia Black played Aeryn Sun television show Farscape. What was the name of the police force Aeryn Sun was apart of on the show?';
  console.log(initialTextEl);

//The main quiz buttons
  var a_buttonEl = document.querySelector('.a_button');
  a_buttonEl.style.display = 'none';
  a_buttonEl.innerHTML = 'A: Storm Troopers';  

  var a_buttonEl2 = document.querySelector('.a_button2');
  a_buttonEl2.style.display = 'unset';
  a_buttonEl2.innerHTML = 'A: Storm Troopers';  

  var b_buttonEl = document.querySelector('.b_button');
  b_buttonEl.style.display = 'none';
  b_buttonEl.innerHTML = 'B: Peacekeeper';

  var b_buttonEl2 = document.querySelector('.b_button2');
  b_buttonEl2.style.display = 'unset';
  b_buttonEl2.innerHTML = 'B: Peacekeeper';

  var c_buttonEl = document.querySelector('.c_button');
  c_buttonEl.style.display = 'none';
  c_buttonEl.innerHTML = 'C: Nova Corps';

  var c_buttonEl2 = document.querySelector('.c_button2');
  c_buttonEl2.style.display = 'unset';
  c_buttonEl2.innerHTML = 'C: Nova Corps';

  var d_buttonEl = document.querySelector('.d_button');
  d_buttonEl.innerHTML = 'D: Guardian of the Galaxy';
  d_buttonEl.style.display = 'none';

  var d_buttonEl2 = document.querySelector('.d_button2');
  d_buttonEl2.innerHTML = 'D: Guardian of the Galaxy';
  d_buttonEl2.style.display = 'unset';

//Variable photo with questions 
var extrapixEl = document.querySelector('.extrapix');
extrapixEl.innerHTML = '<img src="aerynsuun.jpg" width="100%">';
console.log(extrapixEl);
return;
}


function nextQuestion3(){
  console.log('Next Question was selected')

//This is question THREE-3-taWIth
var quizHeaderEl = document.querySelector('.quizHeader');
quizHeaderEl.innerHTML = 'Question number 3';

//Initial text, then quiz questions
  var initialTextEl = document.querySelector('#initialText')
  initialTextEl.innerHTML = 'Most of the characters on Farscape had rich speaking roles. Because she was a ______ Moya had little direct dialogue?';
  console.log(initialTextEl);

//The main quiz buttons
  var a_buttonEl = document.querySelector('.a_button');
  a_buttonEl.style.display = 'unset';
  a_buttonEl.innerHTML = 'A: Murderous Alien';

  var a_buttonEl2 = document.querySelector('.a_button2');
  a_buttonEl2.style.display = 'none';
  a_buttonEl2.innerHTML = 'A: Murderous Alien';

  var b_buttonEl = document.querySelector('.b_button');
  b_buttonEl.style.display = 'unset';
  b_buttonEl.innerHTML = 'B: Space Wizard';

  var b_buttonEl2 = document.querySelector('.b_button2');
  b_buttonEl2.style.display = 'none';
  b_buttonEl2.innerHTML = 'B: Space Wizard';

  var c_buttonEl = document.querySelector('.c_button');
  c_buttonEl.style.display = 'unset';
  c_buttonEl.innerHTML = 'C: Marketing for toys';

  var c_buttonEl2 = document.querySelector('.c_button2');
  c_buttonEl2.style.display = 'none';
  c_buttonEl2.innerHTML = 'C: Marketing for toys';

  var d_buttonEl = document.querySelector('.d_button');
  d_buttonEl.style.display = 'unset';
  d_buttonEl.innerHTML = 'D: A living space ship';

  var d_buttonEl2 = document.querySelector('.d_button2');
  d_buttonEl2.style.display = 'none';
  d_buttonEl2.innerHTML = 'D: A living space ship';

//Variable photo with questions 
  var extrapixEl = document.querySelector('.extrapix');
  extrapixEl.innerHTML = '<img src="moya.jpg" width="100%">';
  console.log(extrapixEl);
  
}




{/* <div class="wrap">
<span class=quizHeader>Coding Quiz Challenge</span>
    <p id="initialText">Try to answer the following code-related questions within the time limit. Keep in mind that the incorrect answer will penalize your score/time by 10 seconds!</p>

    <button onclick="start()">
    Begin Quiz
    </button>
</div> */}

