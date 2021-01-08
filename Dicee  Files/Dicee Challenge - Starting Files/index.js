var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomdiceimage1 = "dice"+randomNumber1+".png";
var randomimagesrc1 = "images/"+randomdiceimage1;
var randomdiceimage2 = "dice"+randomNumber2+".png";
var randomimagesrc2 = "images/"+randomdiceimage2;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimagesrc1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimagesrc2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "Yayy player1 wins!!!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML = "Yayy player2 wins!!!";
}
else if(randomNumber1==randomNumber2)
{
    document.querySelector("h1").innerHTML = "Yayy both wins!!!";
}
