
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// число 1-6 рандом

var randomDiceImgage1 = "images/" + "dice" + randomNumber1 + ".png";
var randomDiceImgage2 = "images/" + "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImgage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImgage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩1 player Win!";    
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "STAY";
}
else {
    document.querySelector("h1").textContent = "2 player Win!🚩";
}

