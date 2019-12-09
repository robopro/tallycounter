const counter = document.getElementById("counter");
const container = document.getElementById("container");
const reset_button = document.getElementById("reset-button");
const copy_button = document.getElementById("copy-button");
const dark_slider = document.getElementById("dark-check");
const base_url = "https://robopro.github.io/tallycounter/?";

// SET STARTING NUMBER FROM URL
document.addEventListener('DOMContentLoaded', () => {
	const found = window.location.href.match(/\?\d+\D|\?\d+/g)[0]
	if (found) counter.innerText = found.replace(/\D/g, '');
});

const updateURL = (num) => {
	window.location.href = base_url + num;
}

container.addEventListener('click', (e) => {
	counter.innerText = parseInt(counter.innerText) + 1;
	updateURL(counter.innerText);
});

reset_button.addEventListener("click", (e) => {
	e.stopPropagation();
	counter.innerText = 0;
	updateURL(counter.innerText);
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

// SOCIAL MEDIA SHARING
const popUpWindow = (share_url) => {
	window.open(
		share_url + base_url + counter.innerText,
		"pop",
		"resizable,scrollbars=yes"
	);
}

document.getElementById("fb-button").addEventListener("click", (e) => {
	e.stopPropagation();
	
	popUpWindow("https://www.facebook.com/sharer/sharer.php?u=");
});

document.getElementById("twitter-button").addEventListener("click", (e) => {
	e.stopPropagation();
	
	popUpWindow("https://twitter.com/intent/tweet?url=");
});

document.getElementById("linkedin-button").addEventListener("click", (e) => {
	e.stopPropagation();
	
	popUpWindow("https://www.linkedin.com/shareArticle?mini=true&url=");
});
