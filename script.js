var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("Random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function rgbToHex(rgb) {
	var hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex;
	}
	return hex;
}

function setRandomGradient() {
	var a = Math.floor(Math.random() * (255 - 0) + 0);
	a = rgbToHex(a);
	console.log(a);
	var b = Math.floor(Math.random() * (255 - 0) + 0);
	b = rgbToHex(b);
	var c = Math.floor(Math.random() * (255 - 0) + 0);
	c = rgbToHex(c);
	var d = Math.floor(Math.random() * (255 - 0) + 0);
	d = rgbToHex(d);
	var e = Math.floor(Math.random() * (255 - 0) + 0);
	e = rgbToHex(e);
	var f = Math.floor(Math.random() * (255 - 0) + 0);
	f = rgbToHex(f);

	console.log(color1);
	color1.value = "#" + a + b + c;
	color2.value = "#" + d + e + f;

	// color1.value = "rgb(" + a + ", " + b + ", " + c + ")";
	// color2.value = "rgb(" + d + ", " + e + ", " + f + ")";
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.addEventListener("DOMContentLoaded", function() {
	setGradient();
});

button.addEventListener("click", setRandomGradient);