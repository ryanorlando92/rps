let cpuScore = 0;
let playerScore = 0;
let roundsPlayed = 0;
let numTies = 0;


function getCpuChoice() {

    const float = Math.random() * 100;

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

function playRound() {
    let cpuSelection = getCpuChoice();
    let playerSelection = getPlayerChoice();

    console.log( `You chose ${playerSelection}`)
    console.log( 'Rock, Paper, Scissors, SHOOT')
    console.log( `The Computer chose ${cpuSelection}!` )

    if (cpuSelection === playerSelection) {
        console.log( 'Tie!' );
        numTies++;
    
    } else if (playerSelection === 'ROCK') {
        // should you use a ternary operator here for succintness?
        if (cpuSelection === 'PAPER') {
            console.log( 'Paper beats rock! YOU LOSE' );
            cpuScore++;

        } else if (cpuSelection === 'SCISSORS') {
            console.log( 'Rock beats scissors! YOU WIN' );
            playerScore++;

        } else { console.log( 'somthing has gone wrong' ) };
    
    } else if (playerSelection === 'SCISSORS') {
        if (cpuSelection === 'PAPER') {
            console.log( 'Scissors beats paper! YOU WIN' );
            playerScore++;

        } else if (cpuSelection === 'ROCK') {
            console.log( 'Rock beats scissors! YOU LOSE' );
            cpuScore++;

        } else { console.log( 'something has gone wrong' ) };

    } else if (playerSelection === 'PAPER') {
        if (cpuSelection === 'SCISSORS') {
            console.log( 'Scissors beats paper! YOU LOSE');
            cpuScore++;

        } else if (cpuSelection === 'ROCK') {
            console.log( 'Paper beats rock! YOU WIN');
            playerScore++;

        } else { console.log( 'something has gone wrong' ) };
    } else { console.log( 'something has gone wrong' ) };

    roundsPlayed++;
}

// next up, game() function to keep track of score
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log('');
        console.log( `After ${roundsPlayed} rounds of play, the score is:`);
        console.log( `Player 1: ${playerScore}  |  Computer: ${cpuScore}  |  Tie: ${numTies}`);
    }
}

//assignment wants to run the same selection 5 times,
// Id prefer to make 5 selections, maybe ill code that with
// a selection box when i add the buttons and html output for less tedious games