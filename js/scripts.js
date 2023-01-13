
function formSubmit(e) {
	e.preventDefault();
	
	//print the results to the DOM
	let printEl = document.querySelector("#printEl h3");
	printEl.innerText = "hello";
}

window.addEventListener("load", function(e) {
	document.getElementById("form").addEventListener("submit", formSubmit);
});

