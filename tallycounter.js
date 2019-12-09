const counter = document.getElementById("counter");
const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");
const copyButton = document.getElementById("copy-button");
const darkSlider = document.getElementById("dark-check");
const copyText = document.getElementById("copy-text");
const baseUrl = "https://robopro.github.io/tallycounter/?";

// SET STARTING NUMBER FROM URL
document.addEventListener('DOMContentLoaded', () => {
	const found = window.location.href.match(/\?\d+\D|\?\d+/g)
	if (found) counter.innerText = found[0].replace(/\D/g, '');
});

// INCREASE COUNTER
container.addEventListener('click', (e) => {
	counter.innerText = parseInt(counter.innerText) + 1;
});

// RESET COUNTER
resetButton.addEventListener("click", (e) => {
	e.stopPropagation();
	counter.innerText = 0;
});

// COPY TO CLIPBOARD
const copyToClipboard = () => {
	document.getElementById("clipboard").innerText = copyText.innerText;	
	window.getSelection().selectAllChildren(copyText);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	
	const success = document.getElementById("success");
	success.classList.add("visible")
	setTimeout(() => {
		success.classList.remove("visible");
	}, 2000);
}

// COPY NUMBER AND SUCCESS FLASH
copyButton.addEventListener("click", (e) => {
	e.stopPropagation();
	
	copyText.innerText = counter.innerText;
	copyToClipboard();
});

// DARK MODE
const addDark = (element) => {
	element.classList.add("dark")
}

const removeDark = (element) => {
	element.classList.remove("dark")
}

darkSlider.addEventListener("change", (e) => {
	const socialSharing = document.querySelector(".social-sharing-links")
	const footer = document.querySelector(".footer");

	if (e.target.checked) {
		addDark(container);
		addDark(copyButton);
		addDark(footer);
	} else {
		removeDark(container);
		removeDark(copyButton);
		removeDark(footer);	
	}
});

// SOCIAL MEDIA SHARING
const popUpWindow = (shareUrl) => {
	window.open(
		shareUrl + baseUrl + counter.innerText,
		"pop",
		"resizable,scrollbars=yes"
	);
}

document.getElementById("fb-button").addEventListener("click", (e) => {
	e.stopPropagation();
	
	popUpWindow("https://www.facebook.com/sharer/sharer.php?u=");
});

document.getElementById("twit-button").addEventListener("click", (e) => {
	e.stopPropagation();
	
	popUpWindow("https://twitter.com/intent/tweet?url=");
});

document.getElementById("linkedin-button").addEventListener("click", (e) => {
	e.stopPropagation();
	
	popUpWindow("https://www.linkedin.com/shareArticle?mini=true&url=");
});

document.getElementById("url-button").addEventListener("click", (e) => {
	e.stopPropagation();
	
	copyText.innerText = baseUrl + counter.innerText;
	copyToClipboard();
});
