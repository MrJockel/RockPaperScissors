


function game (){
    
    let playerWon = 0;
    let computerWon = 0;
    let playResult;


    for (let i = 0; i < 5; i++) {

        while (true){
            var input = prompt("What do you choose?? Type: \n  (1) for Rock \n  (2) for Paper \n  (3) for Scissors");

            var playersPick;
      
    
            if (input == 1){
                playersPick = "Rock";
                break;
            } else if (input ==2) {
                playersPick = "Paper";
                break;
            } else if (input == 3){
                playersPick = "Scissors"
                break;
            } else {
                alert("You typed a wrong number, dummy!");
            }
        }


        playResult = playRound(playersPick, computerPlay())


        if (playResult.includes("YOU WIN")) {
            playerWon++; 
            console.log(playResult + "\n"  +  "Your Score: " + playerWon + "\n"  + "Computer Score: " + computerWon );

        } else if (playResult.includes("YOU LOOSE")) {
            computerWon++; 
            console.log(playResult + "\n"  +  "Your Score: " + playerWon + "\n"  + "Computer Score: " + computerWon );

        } else if (playResult.includes("It's a Draw")){
            console.log(playResult + "\n"  +  "Your Score: " + playerWon + "\n"  + "Computer Score: " + computerWon );

        }
     }

     console.log("Final Score: " + "\n"  +  "Your Score: " + playerWon + "\n"  + "Computer Score: " + computerWon );
}



