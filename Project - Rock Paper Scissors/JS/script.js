// Code

let arr = ["rock","paper","scissors"];
let result = '';

humanScore = 0;
computerScore = 0;

let humanSelection;
let computerSelection;

function getcomputerchoice(arr) {
    for(let i=0 ; i<arr.length; i++){
        result = Math.floor(Math.random() * arr.length);
        // result = arr.charAt(Math.floor(Math.random() * arr.length))
        if(result == 0 ){
            // console.log(arr[0])
            return arr[0]
        }
        else if (result == 1){
            return arr[1]
        }
        else if(result == 2){
            return arr[2]
        }
        else{
            console.log("Invalid!");
        }
    }

}

// console.log(getcomputerchoice(arr));

function getHumanChoice() {
    str = prompt("Enter a String 1.Rock , 2.Paper, 3.Scissors");
    return str;
}
// console.log(getHumanChoice(String));

function playRound(humanChoice , computerChoice) {

    humanSelection = console.log(getHumanChoice(String));
    computerSelection = console.log(getcomputerchoice(arr));

    for(let i=0; i<3; i++){

        if(humanSelection == computerSelection){
            // console.log(`You Won! ${humanSelection} beats ${computerSelection}`);
            if( humanSelection != arr[2]){
                console.log(`You Won! Rock beats ${arr[2]}`);
            }
            else if(humanSelection != arr[1]){
                console.log(`You Won! $Paper beats ${arr[1]}`);
            }
            else{
                console.log(`You Won! Scissor beats ${arr[0]}`);
            }
        }
        else{
            console.log(`You Lost the Game!`);
        }
    }



    return humanChoice , computerChoice;
}



playRound(humanSelection , computerSelection);