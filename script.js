let cpuChoice = null;
let PlayerChoice = null;

function getCpuChoice() {

    const float = Math.random() * 100;

    if (float > 66.67) {
        return 'ROCK';

    }   else if (float > 33.33) {
        return 'PAPER';
    }   else {
        return 'SCISSOR';
    };
}

function getPlayerChoice() {
    const userInput = prompt( 'Rock, Paper, or Scissors?' );
    if ( userInput.toUpperCase() = 'ROCK' || 'PAPER' || 'SCISSOR' ) {
        return userInput.toUpperCase();
    } else {
        alert( 'You have made an invalid selection' );
    };
} 

