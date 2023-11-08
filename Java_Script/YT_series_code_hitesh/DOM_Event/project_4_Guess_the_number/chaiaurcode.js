let randomNumber=parseInt(Math.random()*100 +1);

const submit=document.querySelector('#subt');
const inputnum=document.querySelector('#guessField');
const guesses=document.querySelector('.guesses');
const Remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

let p=document.createElement('p');

let playgame=true;
let prevguess=[];
let numguess=1;

if(playgame){
   submit.addEventListener('click',function(e){
     e.preventDefault();
     const guess=parseInt(inputnum.value);
     validate(guess);
   });
}
function validate(guess)
{
   if(isNaN(guess)){
    alert('Please Enter Valid Number');
   }
   else if(guess<0)
   {
    alert('Please Enter Valid Number');
   }
   else if(guess>100)
    {
      alert('Please Enter Valid Number');
    }
   else{
    prevguess.push(guess);
    if(numguess===11)
     {
        displayGuess(guess);
        displayMessage(`Game Over random Number was ${randomNumber}`);
        endGame();
     }
     else{
        displayGuess(guess);
        checkGuess(guess)
     }
   }
}

function checkGuess(guess)
{
    if(guess===randomNumber)
    {
       displayMessage('You Have guess the Number');
       endGame();
    }
    else if(guess<randomNumber){
       displayMessage('Number is too High');
    }
    else if(guess>randomNumber){
        displayMessage('number is too low');
    }
}

function displayGuess(guess)
{
    inputnum.value='';
    guesses.innerHTML=`${prevguess}`;
    numguess++;
    Remaining.innerHTML=`${11-numguess}`;

}
function displayMessage(message)
{
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame()
{
    inputnum.value='';
    inputnum.setAttribute('disable','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playgame=false;
    newGame();
}

function newGame()
{
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100 +1);
        resultParas=[];
        numguess=1;
        guesses.innerHTML='';
        Remaining.innerHTML='10';
    })
}