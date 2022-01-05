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
    console.log(player);
    console.log(computer);
    if (computer.toLowerCase() === player){return "Tie!";}
    else if (computer === "Rock" && player === "paper"){return "Player Wins!";}
    else if (computer === "Paper" && player === "scissors"){return "Player Wins!";}
    else if (computer === "Scissors" && player === "rock"){return "Player Wins!";}
    else{return "Computer Wins!";}
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(play(computerSelection, playerSelection));
