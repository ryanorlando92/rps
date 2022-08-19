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

