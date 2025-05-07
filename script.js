

function rollDice() {
    let diceOne = Math.floor(Math.random()*6+1);
console.log(diceOne);

let diceTwo = Math.floor(Math.random()*6+1);
console.log(diceTwo);

let imgSrc1 = document.querySelector(".img1")
let imgSrc2 = document.querySelector(".img2")



imgSrc1.setAttribute("src","images/dice" + diceOne +".png");
imgSrc2.setAttribute("src","images/dice" + diceTwo +".png");

if (diceOne>diceTwo) {
    document.querySelector("p").innerHTML="Player 1 Wins!!!"
} else if(diceTwo>diceOne) {
    document.querySelector("p").innerHTML="Player 2 Wins!!!"
}
else{
    document.querySelector("p").innerHTML="It's a draw. Play again?"
}
    
}