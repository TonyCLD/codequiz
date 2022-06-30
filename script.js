function startTimer()
// The timer begins
{
    var counter = 30;
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

    var quizHeaderEl = document.querySelector('.quizHeader');
    quizHeaderEl.innerHTML = 'Question number 1';
    
    var initialTextEl = document.querySelector('#initialText')
    initialTextEl.innerHTML = 'Ben Brower played John Crichtion in sci-fi television show Farscape. In what city did he grow up?';
    console.log(initialTextEl);

    var startbuttonEl = document.querySelector('.startbutton');
    startbuttonEl.style.display = 'none';

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
    

}

function start()
{
      document.getElementById("count").style="color:red;";
      startTimer();
};



{/* <div class="wrap">
<span class=quizHeader>Coding Quiz Challenge</span>
    <p id="initialText">Try to answer the following code-related questions within the time limit. Keep in mind that the incorrect answer will penalize your score/time by 10 seconds!</p>

    <button onclick="start()">
    Begin Quiz
    </button>
</div> */}

