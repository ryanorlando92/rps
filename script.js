let cpuChoice = '';

function getCpuChoice() {

    const float = Math.random() * 100;

    if (float > 66.67) {
        return 'rock';

    }   else if (float > 33.33) {
        return 'paper';
    }   else {
        return 'scissor';
    };
}