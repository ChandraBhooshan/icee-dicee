var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImgae = "dice"+randomNumber1+".png";
var randomImageSource = "images/"+randomDiceImgae;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImgae = "dice"+randomNumber2+".png";
var randomImageSource = "images/"+randomDiceImgae;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "⛳Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins⛳";
}
else{
    document.querySelector("h1").innerHTML = "⛳Match Draw⛳";
}





// document.querySelector(".img image1").setAttribute("src", "dice"+randomNumber1+".png");

// var randomNumber2 = Math.floor(Math.random()*6)+1;
// document.querySelector(".img image2").setAttribute("src", "image/dice"+randomNumber2+".png");