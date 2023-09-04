function playRound(playerSelection, computerSelection) {
    p = playerSelection.toLowerCase()
    c = computerSelection.toLowerCase()

    if (p === c){
        return "duel"
    }

    switch (p){
        case 'rock':
            if (c === 'paper'){
                return 'PC wins'
            }
            else if (c === 'scissors'){
                return 'Players wins'
            }
            break
        case 'paper':
            if (c === 'scissors'){
                return 'PC wins'
            }
            else if (c === 'rock'){
                return 'Players wins'
            }
            break
        case 'scissors':
            if (c === 'rock'){
                return 'PC wins'
            }
            else if (c === 'paper'){
                return 'Players wins'
            }
            break
    }
  
}

function getComputerChoice() {
    rsp = ['rock' , 'scissors' , 'paper']
    return rsp[Math.floor(Math.random() * rsp.length)]
}

   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));