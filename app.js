let result = document.getElementById("result");
let tries = document.getElementById("count");
let loader = document.getElementById("loader");
let loading = document.getElementById("loading");
let total_June_10 = document.getElementById("total-June-10");
let total_June_17 = document.getElementById("total-June-17");
let total_July_1 = document.getElementById("total-July-1");
let total_July_8 = document.getElementById("total-July-8");
var count = 0;
var times = [0, 0, 0, 0];

function weddDay() {
	count++;
	let randomNumber = Math.floor(Math.random() * 4);
	var day = 0;
	var month = "";
	var text = "";
	var date = "";
	var timer = 0;

	loading.innerHTML = "Loading ...";
	loader.classList.remove("loader-class");

	setTimeout(function () {
		if (randomNumber == 0) {
			day = 10;
			month = "June";
			times[0]++;
			total_June_10.innerHTML = month + " " + day + " - " + times[0] + " times";
		} else if (randomNumber == 1) {
			day = 17;
			month = "June";
			times[1]++;
			total_June_17.innerHTML = month + " " + day + " - " + times[1] + " times";
		} else if (randomNumber == 2) {
			day = 1;
			month = "July";
			times[2]++;
			total_July_1.innerHTML = month + " " + day + " - " + times[2] + " times";
		} else {
			day = 8;
			month = "July";
			times[3]++;
			total_July_8.innerHTML = month + " " + day + " - " + times[3] + " times";
		}
		date = month + " " + day;
		text = "Your Wedding Day is on " + date;

		loading.innerHTML = "";
		loader.classList.add("loader-class");

		result.innerHTML = text + " ";
		tries.innerHTML = "Total " + count + " attempts";
	}, 1000);

	result.style.color = "blue";
	result.style.fontSize = "1.6rem";

	tries.style.fontSize = "1.6rem";
	tries.style.textAlign = "center";
	tries.style.marginBottom = "1rem";

	total_June_10.style.fontSize = "1.4rem";
	total_June_17.style.fontSize = "1.4rem";
	total_July_1.style.fontSize = "1.4rem";
	total_July_8.style.fontSize = "1.4rem";
	total_July_8.style.marginBottom = "1.2rem";
}
function startOver() {
	result.innerHTML = "";
	tries.innerHTML = "";
	total_June_10.innerHTML = "";
	total_June_17.innerHTML = "";
	total_July_1.innerHTML = "";
	total_July_8.innerHTML = "";
	count = 0;
	times = [0, 0, 0, 0];
}
