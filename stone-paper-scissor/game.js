/*
notes :
1)checked property don't work for buttons.it works for input 
elements like radio and checkbox elements.
 */

const playerDisplay = document.querySelector("#player");
const computerDisplay = document.querySelector("#computer");
const resultDisplay = document.querySelector("#result");


function findWinner(player,computer)
{
    if (player === computer) {
        return "It's a Tie!";
    }
    else if (
        (player === "rock" && computer === "scissor") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper")
    ) {
        return "Player Wins !😁";
    }
    else
    return "Computer Wins! 😢";
}

function play(key)
{

    playerDisplay.textContent =` player :${key} `;

    
    // computer choice
    let choices = ["rock","paper","scissor"];
    let computer_choice =choices[Math.floor(Math.random() * choices.length)];
    computerDisplay.textContent =`computer :${computer_choice}`;


    // decide winenr :rock >scissor ,scissor > paper 
    // paper >rock
    
    let result = findWinner(key,computer_choice);
    resultDisplay.textContent = result;

    console.log(Math.floor(Math.random() * 3) );

}


