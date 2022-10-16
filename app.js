let result = document.getElementById("result");
let tries = document.getElementById("count");
var count = 0;

function weddDay() {
	count++;
	let randomNumber = Math.floor(Math.random() * 5);
	var day = 0;
	var month = "";
	var text = "";
	var date = "";

	if (randomNumber == 0) {
		day = 10;
		month = "June";
	} else if (randomNumber == 1) {
		day = 17;
		month = "June";
	} else if (randomNumber == 2) {
		day = 24;
		month = "June";
	} else if (randomNumber == 3) {
		day = 1;
		month = "July";
	} else {
		day = 8;
		month = "July";
	}

	date = month + " " + day;

	text = "Your Wedding Day is on " + date;
	result.style.color = "blue";
	result.style.fontSize = "1.5rem";

	tries.style.fontSize = "1.5rem";
	tries.style.textAlign = "center";
	tries.style.marginBottom = "1rem";

	result.innerHTML = text + " ";
	tries.innerHTML += count + " attempt: " + month + " " + day + "</br>";
}
function startOver() {
	let result = document.getElementById("result");
	result.innerHTML = "";
	tries.innerHTML = "";
	count = 0;
}
