function weddDay() {
	let result = document.getElementById("result");
	let randomNumber = Math.floor(Math.random() * 4);
	var day = 0;
	var month = "";
	var text = "";

	if (randomNumber == 0) {
		day = 24;
		month = "June";
	} else if (randomNumber == 1) {
		day = 1;
		month = "July";
	} else if (randomNumber == 2) {
		day = 8;
		month = "July";
	} else if (randomNumber == 3) {
		day = 15;
		month = "July";
	} 
	result.style.color = "blue";
	result.style.fontSize = "1.5rem";
	result.innerHTML = text = "Your Wedding Day is on " + month + " " + day;
}
function startOver() {
	let result = document.getElementById("result");
	result.innerHTML = " ";
}
