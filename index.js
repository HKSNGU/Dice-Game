var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomSource1 = "images/" + randomDice1;

document.querySelectorAll("img")[0].setAttribute("src", randomSource1);



var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomSource2 = "images/" + randomDice2;

document.querySelectorAll("img")[1].setAttribute("src", randomSource2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

function refreshPage(){
    window.location.reload();
}