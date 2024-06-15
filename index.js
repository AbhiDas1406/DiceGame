var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1 * 6) + 1;

var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2 * 6) + 1;

var src1 = "./images/dice" + randomnumber1 + ".png";
var src2 = "./images/dice" + randomnumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", src1);
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", src2);



if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if(randomnumber2 > randomnumber1)
{
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else if(randomnumber2 === randomnumber1)
{
    document.querySelector("h1").textContent = "Draw!";
}
