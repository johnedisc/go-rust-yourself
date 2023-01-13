function hide() {
	
}

function formSubmit(e) {
	e.preventDefault();
	
// read in user data
	const name = document.querySelector("input#name").value
	const time = document.querySelector("input#time").value
	const menu = document.querySelector("select#menu").value
	const speed = document.querySelector("input[name='speed']:checked").value
	const workType = document.querySelector("input[name='workType']:checked").value
	const pain = document.querySelector("input[name='pain']:checked").value
	console.log(menu);
	console.log(speed);
	console.log(workType);
	console.log(pain);

// select hidden lang <divs>
	const go = document.querySelector("div#go");
	const rust = document.querySelector("div#rust");
	const ts = document.querySelector("div#ts");
	
//	print the results to the DOM
	const printEl = document.querySelector("#printEl h2");
	printEl.innerText = "hello";
	go.removeAttribute("class");
	ts.removeAttribute("class");
	rust.removeAttribute("class");
	
}

window.addEventListener("load", function(e) {
	document.getElementById("form").addEventListener("submit", formSubmit);
});

