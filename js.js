console.log(document.querySelector("p.first"));
console.log(document.querySelector("p.special"));
console.log(document.querySelector("p"));

console.log(document.querySelector(".specaial"));
console.log(document.querySelectorAll(".special"));

var h1tag = document.getElementsByTagName("h1");
h1tag[0].style.color = "blue";

var lastPtag = document.getElementsByTagName("p");
lastPtag[4].style.color = "yellow";

