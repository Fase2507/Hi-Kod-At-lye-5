
//SHORTS MANTIGIYLA OYUN WEBSİTESİ HAZIRLAMAK KAYDIRMALI BİR ARAYÜZ.
let score=JSON.parse(localStorage.getItem('score')) || null;
let point=(score.wins)+(-1*score.losses)+(score.ties*0);

let playerChoice;
setTimeout(()=>{
  document.getElementById('tempro').style.display='none';
},15000)
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#temprora').style.display = 'none';
  });
});
// setTimeout(function() {
//   document.querySelector('h3').style.display = 'none';
// }, 14000);
function playGame(playerChoice){
  
  let result='';
  computerChoice=pickComputerChoice();
  if (playerChoice === 'scissor'){
    if(computerChoice==='rock'){
      result='You loose';
    } 
    else if(computerChoice==='paper'){
      result='You win';
    }
    else{
      result='tie';
    }
    
  }else if(playerChoice==='paper'){
    computerChoice=pickComputerChoice();
    
    if(computerChoice==='rock'){
      result='You win';
    }
    else if (computerChoice==='paper'){
      result='tie';
    }
    else{
      result='You loose';
    }
    
  }
  else{
    computerChoice=pickComputerChoice();
        if(computerChoice==='rock'){
          result='Tie';
        }else if(computerChoice==='paper'){
          result='You loose';
        }else{
          result='You win';
        }
      
  }

  
  if(result==='You win'){
    score.wins+=1;
    point+=1;
  }
  else if(result==='You loose'){
    score.losses+=1;
    point-=1;
  }
  else{
    score.ties+=1;
  }
  localStorage.setItem('score',JSON.stringify(score));

  updateScore();
  document.querySelector('.js-result').
  innerHTML=result;
  document.querySelector('.js-move').
  innerHTML=`You
  <img src="${playerChoice}-emoji.png" alt="rock" class="move-icon">
  <img src="${computerChoice}-emoji.png" alt="paper" class="move-icon">
  Computer`;
  
}
function keyStroke(event){
  if(event.key==='q'){
    playGame("rock")
    console.log(event.key)

  }else if(event.key==='w'){
    playGame("paper")
    console.log(event.key)
  }else if(event.key==="e"){
    playGame('scissor')
    console.log(event.key)
  }
}
function updateScore(){
  document.querySelector('.js-score')
    .innerHTML=`Wins:${score.wins} Losses:${score.losses}
     Ties:${score.ties} \n <hr> Point: ${point}`

}
  
function pickComputerChoice(){
  let computerChoice='';
  const randomNumber=Math.random();


if (randomNumber>=0 && randomNumber<1/3){
  computerChoice='rock';
} 
else if (randomNumber>=1/3 && randomNumber<2/3){
  computerChoice='paper';
}
else{
  computerChoice='scissor';
}
return computerChoice;  
}

function reset(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  point=0;
  localStorage.removeItem('score');
  updateScore();
  localStorage.setItem('score',JSON.stringify(score));

  // document.getElementById('result').innerHTML=`Wins:${score.wins} Losses:${score.losses} Ties:${score.ties} \n Point: ${point}`;
}

// Create the pop-up element
/*const popup = document.createElement('div');
popup.style.position = 'fixed';
popup.style.top = '80%';
popup.style.left = '90%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.backgroundColor = 'white';
popup.style.padding = '20px';
popup.style.border = '1px solid black';
popup.style.display = 'none';

// Add some content to the pop-up
popup.innerHTML = `
  <h2>Important Message!</h2>
  <p>This is a reminder that you need to do something important.</p>
  <button id="popup-btn">OK</button>
`;

// Add the pop-up to the page
document.body.appendChild(popup);

// Function to show the pop-up
function showPopup() {
  popup.style.display = 'block';
  setTimeout(hidePopup, 7000); // Hide the pop-up after 5 seconds
}
popup.querySelector('#popup-btn').addEventListener('click', () => {
  hidePopup();
});
// Function to hide the pop-up
function hidePopup() {
  popup.style.display = 'none';
}

// Show the pop-up every 30 seconds
setInterval(showPopup, 5000);
*/
