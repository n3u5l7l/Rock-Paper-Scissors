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

console.log(computerPlay());