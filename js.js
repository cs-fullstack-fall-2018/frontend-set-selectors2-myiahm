console.log(document.querySelector("p.first"));
console.log(document.querySelector("p.special"));
console.log(document.querySelector("p"));

console.log(document.querySelector(".specaial"));
console.log(document.querySelectorAll(".special"));

var h1tag = document.getElementsByTagName("h1");
h1tag[0].style.color = "blue";

var lastPtag = document.getElementsByTagName("p");
lastPtag[4].style.color = "yellow";

/*

Put your js script at the bottom of your HTML page to fix some issues.

Question 1:
	a) Not complete. The p tag is not correctly called using getElementsByClass/ID/Tag
Questoin 2: 
	a) Complete once js script is at bottom of HTML
Question 3:
	a) Complete once js script is at bottom of HTML
Question 4:
	a) Almost complete. Make sure you want INDEX 4 which is the 5th item.

From Kenn
*/