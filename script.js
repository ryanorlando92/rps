let cpuChoice = null;
let PlayerChoice = null;

function getCpuChoice() {

    const float = Math.random() * 100;

    if (float > 66.67) {
        return 'ROCK';

    }   else if (float > 33.33) {
        return 'PAPER';
    }   else {
        return 'SCISSORSgetPlayerChoice()getPlayerChoice()';
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
    
    } else if (playerSelection === 'ROCK') {
        // should you use a ternary operator here for succintness?
        if (cpuSelection === 'PAPER') {
            console.log( 'Paper beats rock! YOU LOSE' );

        } else if (cpuSelection === 'SCISSORS') {
            console.log( 'Rock beats scissors! YOU WIN' );

        } else { console.log( 'somthing has gone wrong' ) };
    
    } else if (playerSelection === 'SCISSORS') {
        if (cpuSelection === 'PAPER') {
            console.log( 'Scissors beats paper! YOU WIN' );

        } else if (cpuSelection === 'ROCK') {
            console.log( 'Rock beats scissors! YOU LOSE' );

        } else { console.log( 'something has gone wrong' ) };

    } else if (playerSelection === 'PAPER') {
        if (cpuSelection === 'SCISSORS') {
            console.log( 'Scissors beats paper! YOU LOSE');

        } else if (cpuSelection === 'ROCK') {
            console.log( 'Paper beats rock! YOU WIN');
        } else { console.log( 'something has gone wrong' ) };
    } else { console.log( 'something has gone wrong' ) };

}