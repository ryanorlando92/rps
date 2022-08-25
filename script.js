// initialize score variables
let cpuScore = 0;
let playerScore = 0;
let roundsPlayed = 0;
let numTies = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    playRound('ROCK');
});
paper.addEventListener('click', () => {
    playRound('PAPER');
});
scissors.addEventListener('click', () => {
    playRound('SCISSORS');
});

const container = document.querySelector('.container');
const playerOutput = document.createElement('p');
    playerOutput.classList.add('playerOutput');
const cpuOutput = document.createElement('p');
    cpuOutput.classList.add('cpuOutput');
const roundResult = document.createElement('p');
    roundResult.classList.add('roundResult');
const score = document.createElement('p');
    score.classList.add('score');
const gameOver = document.createElement('p');
    gameOver.classList.add('gameOver');


function getCpuChoice() {

    const float = Math.random() * 100; //generate random number between 0 and 99.99 and equally distribute the 3 options

    if (float > 66.67) {
        return 'ROCK';

    }   else if (float > 33.33) {
        return 'PAPER';
    }   else {
        return 'SCISSORS';
    };
}

function getPlayerChoice() {

    const userInput = prompt( 'Rock, Paper, or Scissors?' );

    switch ( userInput.toUpperCase() ) {
        case 'ROCK':
            return 'ROCK';
            break;
        
        case 'PAPER':
            return 'PAPER';
            break;

        case 'SCISSORS':
            return 'SCISSORS';
            break;

        case 'SCISSOR':
            return 'SCISSORS';
            break;
        
        default:
            alert( 'You have made an invalid selection' );
    };
} 

function playRound(playerSelection) {
    let cpuSelection = getCpuChoice();

    playerOutput.textContent = `You chose ${playerSelection}`;
    cpuOutput.textContent = `Rock, Paper, Scissors, SHOOT! \n
        The Computer chose ${cpuSelection}!`;

    if (cpuSelection === playerSelection) {
        roundResult.textContent = 'Tie!' ;
        numTies++;
    
    } else if (playerSelection === 'ROCK') {
       
        if (cpuSelection === 'PAPER') {
            roundResult.textContent = 'Paper beats rock! YOU LOSE' ;
            cpuScore++;

        } else if (cpuSelection === 'SCISSORS') {
            roundResult.textContent = 'Rock beats scissors! YOU WIN' ;
            playerScore++;

        } else { console.log( 'somthing has gone wrong' ) };
    
    } else if (playerSelection === 'SCISSORS') {
        if (cpuSelection === 'PAPER') {
            roundResult.textContent = 'Scissors beats paper! YOU WIN' ;
            playerScore++;

        } else if (cpuSelection === 'ROCK') {
            roundResult.textContent = 'Rock beats scissors! YOU LOSE' ;
            cpuScore++;

        } else { console.log( 'something has gone wrong' ) };

    } else if (playerSelection === 'PAPER') {
        if (cpuSelection === 'SCISSORS') {
            roundResult.textContent = 'Scissors beats paper! YOU LOSE' ;
            cpuScore++;

        } else if (cpuSelection === 'ROCK') {
            roundResult.textContent = 'Paper beats rock! YOU WIN' ;
            playerScore++;

        } else { console.log( 'something has gone wrong' ) };
    } else { console.log( 'something has gone wrong' ) };

    roundsPlayed++;
    roundEnd();
}

function roundEnd() {
    score.innerHTML = `Rounds Played: ${roundsPlayed} <br/>
    Player Wins: ${playerScore}<br/>
    CPU Wins: ${cpuScore}<br/>
    Number of Ties: ${numTies}`;

    container.appendChild(playerOutput);
    container.appendChild(cpuOutput);
    container.appendChild(roundResult);
    container.appendChild(score);

    if ((playerScore === 5) || (cpuScore === 5)) endGame();
}

function endGame() {
    gameOver.innerHTML = "GAME OVER <br/>";
    if (playerScore > cpuScore) {
        gameOver.innerHTML += "<br/>YOU WIN THE MATCH!<br/>";
    } else gameOver.innerHTML += "<br/>YOU LOST THE MATCH!<br/>";
    
    gameOver.innerHTML +="Would you like to play again? <br/>";
    gameOver.innerHTML +="<button class='button restart'>Restart Game</button>";
    container.appendChild(gameOver);
    const restartButton = document.querySelector('.restart');
    restartButton.addEventListener('click', restartGame);
}    



function restartGame() {
cpuScore = 0;
playerScore = 0;
roundsPlayed = 0;
numTies = 0;
playerOutput.remove();
cpuOutput.remove();
roundResult.remove();
score.remove();
gameOver.remove();
}


/*

main screen Play game to 5 || custom game || unlimited

 a button that says im done playing for now that then determines winner

*/