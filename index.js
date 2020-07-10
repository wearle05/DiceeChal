var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
var diceRolls = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var player1Roll = diceRolls[randomNumber1];
var player2Roll = diceRolls[randomNumber2];

document.querySelector(".img1").setAttribute("src", player1Roll);
document.querySelector(".img2").setAttribute("src", player2Roll);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw! Refresh again."
  }
