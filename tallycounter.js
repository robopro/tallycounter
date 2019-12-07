const counter = document.getElementById("counter");
const container = document.getElementById("container");
const reset = document.getElementById("reset-button");
const copy = document.getElementById("copy-button");
const success = document.getElementById("success");
const copy_count = document.getElementById("copy-count");
		
container.addEventListener('mousedown', (e) => {
	if (e.detail > 1)
		e.preventDefault();
	counter.innerText = parseInt(counter.innerText) + 1;
	copy_count.innerText = counter.innerText;
});

reset.addEventListener("click", () => {
	counter.innerText = 0;
});

copy.addEventListener("click", () => {
	let range = document.createRange();
	range.selectNode(counter);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	success.classList.add("visible")
	setTimeout(() => {
		success.classList.remove("visible");
	}, 2000);
});