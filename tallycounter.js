const counter = document.getElementById("counter");
const container = document.getElementById("container");
const reset_button = document.getElementById("reset-button");
const copy_button = document.getElementById("copy-button");
const dark_slider = document.getElementById("dark-check");
const social_sharing = document.querySelector(".social-sharing-links");
	
container.addEventListener('click', (e) => {
	counter.innerText = parseInt(counter.innerText) + 1;
});

reset_button.addEventListener("click", (e) => {
	e.stopPropagation();
	counter.innerText = 0;
});

social_sharing.addEventListener("click", (e) => {
	e.stopPropagation();
});

// COPY NUMBER AND SUCCESS FLASH
copy_button.addEventListener("click", (e) => {
	e.stopPropagation();
	
	document.getElementById("copy-count").innerText = counter.innerText;
	
	window.getSelection().selectAllChildren(counter);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	
	const success = document.getElementById("success");
	success.classList.add("visible")
	setTimeout(() => {
		success.classList.remove("visible");
	}, 2000);
});

// DARK MODE
const addDark = (element) => {
	element.classList.add("dark")
}

const removeDark = (element) => {
	element.classList.remove("dark")
}

dark_slider.addEventListener("change", (e) => {
	const social_sharing = document.querySelector(".social-sharing-links")
	const footer = document.querySelector(".footer");

	if (e.target.checked) {
		addDark(container);
		addDark(copy_button);
		addDark(footer);
	} else {
		removeDark(container);
		removeDark(copy_button);
		removeDark(footer);	
	}
});