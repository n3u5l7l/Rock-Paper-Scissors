function computerPlay()
{
    let x = (Math.floor(Math.random()*100))%3;
    if (x===0)
    {
        return "Rock";
    }
    else if (x===1){return "Paper";}
    else{return "Scissors";}

}

function play(computer, player)
{
    player = player.toLowerCase();
    if (computer.toLowerCase() === player){return "Tie!";}
    else if (computer === "Rock" && player === "paper"){return "Player Wins!";}
    else if (computer === "Paper" && player === "scissors"){return "Player Wins!";}
    else if (computer === "Scissors" && player === "rock"){return "Player Wins!";}
    else{return "Computer Wins!";}
}

function game(player)
{
    let playerWin = 0;
    let computerWin = 0;
    player = player.toLowerCase();
    for (let i = 0; i < 5; i++)
    {
        let computerChoice = computerPlay();
        if (computerChoice.toLowerCase() === player){continue;}
        else if (computerChoice === "Rock" && player === "paper"){playerWin++;}
        else if (computerChoice === "Paper" && player === "scissors"){playerWin++;}
        else if (computerChoice === "Scissors" && player === "rock"){playerWin++;}
        else{computerWin++;}
    }
    if(computerWin==playerWin){return "Tie!";}
    else if (computerWin > playerWin){return "Computer Wins!";}
    else{return "Player Wins!";}
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(game(playerSelection));
