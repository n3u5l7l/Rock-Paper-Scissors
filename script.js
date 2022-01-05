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

function game()
{
    let playerWin = 0;
    let computerWin = 0;
    let cancelCheck = false;
    for (let i = 0; i < 5; i++)
    {
        const computerChoice = computerPlay();
        let player = prompt("Rock, Paper or Scissors?", "Rock");
        if (player===null){cancelCheck=true;break;}
        player = player.toLowerCase();
        if (player !== "rock" && player !== "paper" && player !== "scissors"){alert("Please enter rock, paper or scissors");i--;continue;}
        if (computerChoice.toLowerCase() === player){console.log("A Tie.");continue;}
        else if (computerChoice === "Rock" && player === "paper"){console.log("Player win.");playerWin++;}
        else if (computerChoice === "Paper" && player === "scissors"){console.log("Player win.");playerWin++;}
        else if (computerChoice === "Scissors" && player === "rock"){console.log("Player win.");playerWin++;}
        else{console.log("Computer win.");computerWin++;}
    }
    if(cancelCheck){alert("Match Cancelled");return;}
    if(computerWin==playerWin){return "Tie!";}
    else if (computerWin > playerWin){return "Computer is the final winner!";}
    else{return "Player is the final winner!";}
}

console.log(game());
