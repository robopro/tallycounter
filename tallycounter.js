const counter = document.getElementById("counter");
const container = document.getElementById("container");
const reset_button = document.getElementById("reset-button");
const copy_button = document.getElementById("copy-button");
const success = document.getElementById("success");
const copy_count = document.getElementById("copy-count");
		
container.addEventListener('click', (e) => {
	counter.innerText = parseInt(counter.innerText) + 1;
});

reset_button.addEventListener("click", (e) => {
	e.stopPropagation();
	counter.innerText = 0;
});

copy_button.addEventListener("click", (e) => {
	e.stopPropagation();
	
	copy_count.innerText = counter.innerText;
	
	window.getSelection().selectAllChildren(counter);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	
	success.classList.add("visible")
	setTimeout(() => {
		success.classList.remove("visible");
	}, 2000);
});