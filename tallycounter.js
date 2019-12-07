const counter = document.getElementById("counter");
const container = document.getElementById("container");
const reset = document.getElementById("reset-button");
		
container.addEventListener('mousedown', (e) => {
	if (e.detail > 1)
		e.preventDefault();
	counter.innerText = parseInt(counter.innerText) + 1;
});

reset.addEventListener("click", () => {
	counter.innerText = 0;
});