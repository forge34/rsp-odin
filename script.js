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
                return 'Player wins'
            }
            break
        case 'paper':
            if (c === 'scissors'){
                return 'PC wins'
            }
            else if (c === 'rock'){
                return 'Player wins'
            }
            break
        case 'scissors':
            if (c === 'rock'){
                return 'PC wins'
            }
            else if (c === 'paper'){
                return 'Player wins'
            }
            break
    }
  
}

function getComputerChoice() {
    rsp = ['rock' , 'scissors' , 'paper']
    return rsp[Math.floor(Math.random() * rsp.length)]
}

   
let playerSelection = "";

let p_score_counter = 0
let c_score_counter = 0 

let paper = document.querySelector('#paper')
let rock = document.querySelector('#rock')
let scissors = document.querySelector('#scissors')
let start = document.querySelector('#start')
let p_score = document.querySelector('#player-score')
let c_score = document.querySelector('#pc-score')

paper.onclick = () => playerSelection = 'paper'
rock.onclick = () => playerSelection = 'rock'
scissors.onclick = () => playerSelection = 'scissors'

start.onclick = () => {
    let computerSelection = getComputerChoice();
    console.log(computerSelection)


    let score = playRound(playerSelection , computerSelection)

    if (score.toLowerCase() === 'player wins'){
        p_score_counter++
    }
    else if (score.toLowerCase() === 'pc wins'){
        c_score_counter++
    }

    p_score.textContent = `Player Score : ${p_score_counter}`
    c_score.textContent = `Computer score : ${c_score_counter}`


}