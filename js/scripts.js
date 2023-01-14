
window.addEventListener("load", function(e) {

	function resetDisplay() {
		rust.setAttribute("class","hidden");
		go.setAttribute("class","hidden");
		ts.setAttribute("class","hidden");
	}

	function resetFormFields() {
		name.value = '';
		time.value = '';
		document.querySelector('[value="frontEnd"]').checked = true;
		console.log(speed.value);
	}

	function readUsrData(e) {

		resetDisplay();
		
		e.preventDefault();
	
		if (time.value < 3) {
			ts.removeAttribute("class");
		} else if (speed.value === "blazfast") {
			rust.removeAttribute("class");
		} else if (workType.value==="server" && (speed.value==="blazfast" || speed.value==="fast") && pain.value==="no") {
			go.removeAttribute("class");
		} else if (pain.value==="yes") {
			rust.removeAttribute("class");
		} else if (workType.value==="frontEnd") {
			ts.removeAttribute("class");
		} else {
			ts.removeAttribute("class");
		}

	// print the results to the DOM
		const printEl = document.querySelector("#printEl h2");
		printEl.innerText = "ok, " + name.value + ". if you insist on programming, then";

		resetFormFields();
	}

//submit user form
	document.getElementById("form").addEventListener("submit", readUsrData);

// select hidden lang to display results to user
	const go = document.querySelector("div#go");
	const rust = document.querySelector("div#rust");
	const ts = document.querySelector("div#ts");
		
//	read in user tags
	let name = document.querySelector("input#name");
	let time = document.querySelector("input#time");
	let menu = document.querySelector("select#menu");
	let speed = document.querySelector("input[name='speed']:checked");
	let workType = document.querySelector("input[name='workType']:checked");
	let pain = document.querySelector("input[name='pain']:checked");


});

