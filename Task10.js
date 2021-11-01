const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
        return userInput;
    } else {
        console.log("error");
    }
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;

        case 2:
            return 'scissors';
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'user won';
    } else {
        if (userChoice === computerChoice) {
            return 'Game was a tie';
        }
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'computer won';
            } else if (computerChoice === 'scissors') {
                return 'user won';
            }
        } else if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                return 'user won';
            } else if (computerChoice === 'scissors') {
                return 'computer won';
            }
        } else if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'computer won';
            } else if (computerChoice === 'paper') {
                return 'user won';
            }
        }
    }
};

function playGame(input) {
    const userChoice = getUserChoice(input);
    const computerChoice = getComputerChoice();
    console.log('User choice is: ' + userChoice);
    console.log('Computer choice is: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame('rock');