var page1 = document.getElementById("page1"); // bring element with "page1"Id from HTML
var page2 = document.getElementById("page2"); // bring element with "page2"Id from HTML
var page3 = document.getElementById("page3"); // bring element with "page3"Id from HTML
var page4 = document.getElementById("page4"); // bring element with "page4"Id from HTML
var page5 = document.getElementById("page5"); // bring element with "page5"Id from HTML
var timer = document.getElementById("timer"); // bring element with "timer"Id from HTML
var time = 60; // Initial time
var x; // setInterval function
var firstScore = -0.1; // initial top score
var secondScore = -0.1; // initial second top score
var firstName = ""; // Name of top scorer
var secondName = ""; // Name of second top scorer

function showFirstScore() { // show the name of top scorer on page 5
  var name = document.getElementById("name").value;
  firstName = name; // save the name of top scorer in javascript
  document.getElementById("1st-initial").innerHTML = name;
}
function showSecondScore() { // show the name of second top scorer on page 5
  var name = document.getElementById("name").value;
  secondName = name; // save the name of second top scorer in javascript
  document.getElementById("2nd-initial").innerHTML = name;
}

function nextPage(index){ // turn pages
  if (index == 1){ // show second page only
    page1.style.display = 'none'; 
    page2.style.display = 'block';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'none';
    time = 60; // reset the time 
    x = setInterval(function(){ // timer (run this function at every sec)
      document.getElementById("timer").innerHTML = "Time: " + time
      time-- // at every time, subtract 1 from time
      if (time < 0){ // time is over. Skip problems and go to page 4
        nextPage(3) 
      }
    }, 1000)
    setTimeout(()=> timer.style.display = 'block', 1000) // need to slowdown for better performance
  }
  if (index == 2){ // show third page only
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'block';
    page4.style.display = 'none';
    page5.style.display = 'none';
  }
  if (index == 3){ //show fourth page only.
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'block';
    page5.style.display = 'none';
    clearInterval(x); // stop the timer.
    timer.style.display = 'none'; // hide the timer.
   
  }
  if (index == 4){ // show fifth page only
    if (time < 0){
      time = time * 0 // if time is over before finish all problems, score is zero.
    }
    if (time >= secondScore){ // run if new score is better than current second top score to update the score board
      if (time >= firstScore){ // runt if new score is better than current top score to update the score board
        if (firstName != "" ){ // If new score is the highest socre, than the current top scorer will be second top scorer
          document.getElementById("2nd-initial").innerHTML = firstName;
          secondName = firstName;
          document.getElementById("2nd-score").innerHTML = firstScore;
          secondScore = firstScore;
        }
        firstScore = time // update first top score
        document.getElementById("1st-score").innerHTML = time;
        showFirstScore()
      }
      else{
        secondScore = time //update second top score
        document.getElementById("2nd-score").innerHTML = time;
        showSecondScore()
      }
    }
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'block';
    
  }
  if (index == 5){ // go back to page 1 to restart the quiz
    page1.style.display = 'block';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'none';
    // document.getElementById("name")= "";
    var input = document.getElementsByClassName('input-text');
    for(var i=0; i<input.length; i++){	// delete the text input on page 4 
      input[i].value = '';
    }
  }
}

function wrongAns (index) {// run if candidates choose the wrong answer.
  if (index == 2){ // wrong answer for the first problem
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'block';
    page4.style.display = 'none';
    page5.style.display = 'none';
    time = time - 30 // 30sec is subtracted from the clock
  }
  if (index == 3){ //wrong answer for the second problem
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'block';
    page5.style.display = 'none';
    time = time - 30 // 30sec is subtracted from the clock
    clearInterval(x);
    timer.style.display = 'none';
  }
}
