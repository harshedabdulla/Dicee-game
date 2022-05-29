var randomNumber;
randomNumber = Math.floor(Math.random() * 6) + 1;

var randomdiceimage = "images/dice" + randomNumber+ ".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdiceimage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomdiceimage2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomdiceimage2);

if (randomNumber2>randomNumber){
  document.querySelector("h1").innerHTML="🚩 Player 2 wins";
}
else if (randomNumber>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if (randomNumber2=randomNumber){
  document.querySelector("h1").innerHTML="🚩 Draw 🚩";
}
