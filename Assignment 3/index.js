alert ("Hello!")

document.getElementsByTagName('a').onmouseover = switchBlue;

function switchBlue() {

	console.log("THIS", this)
  document.body.style.color = 'blue';
}

document.getElementById('posts').onmouseover = switchBlack;

function switchBlack() {
  document.body.style.color = 'black';
}