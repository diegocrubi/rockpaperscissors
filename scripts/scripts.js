function getComputerChoice(){


    let choices = ['rock', 'paper', 'scissors']

    let randomChoice = Math.floor(Math.random() * (choices.length - 0))

    return choices[randomChoice]


}

let computerChoice = getComputerChoice()

let playerChoice = prompt("Choose rock, paper, or scissors.")


function playRound(playerSelection = playerChoice, computerSelection = getComputerChoice()) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" & computerChoice == "paper"){
        
        return "Computer wins!"
    } else if ( playerSelection == "paper" & computerChoice == "scissors") { 
        return "Computer wins!"
    } else if (playerSelection == "scissors" & computerChoice == "rock") { 
        return "Computer wins!"
    } else { 

        return `Player chose ${playerSelection}! Computer chose ${computerChoice}! Player wins!`
    }


}

let gameOutcome = playRound()





alert(gameOutcome)






