// Define the animation using Anime.js
anime({
	targets: ".animated-text",
	translateY: [
		{ value: -50, duration: 50, easing: "linear", delay: 1000 },
		{ value: -100, duration: 50, easing: "linear", delay: 1000 },
		{ value: -150, duration: 50, easing: "linear", delay: 1000 },
		{ value: -200, duration: 50, easing: "linear", delay: 1000 },
		{ value: -250, duration: 50, easing: "linear", delay: 1000 },
	],
	update: function (anim) {
		if (anim.progress < 20) {
			anim.animatables[2].target.style.color = "Red";
			anim.animatables[6].target.style.color = "black";
			anim.animatables[2].target.style.fontSize = "32px";
			anim.animatables[6].target.style.fontSize = "18px";
		} else if (anim.progress < 40) {
			anim.animatables[3].target.style.color = "Red";
			anim.animatables[2].target.style.color = "black";
			anim.animatables[3].target.style.fontSize = "32px";
			anim.animatables[2].target.style.fontSize = "18px";
		} else if (anim.progress < 60) {
			anim.animatables[4].target.style.color = "Red";
			anim.animatables[3].target.style.color = "black";
			anim.animatables[4].target.style.fontSize = "32px";
			anim.animatables[3].target.style.fontSize = "18px";
		} else if (anim.progress < 80) {
			anim.animatables[5].target.style.color = "Red";
			anim.animatables[4].target.style.color = "black";
			anim.animatables[5].target.style.fontSize = "32px";
			anim.animatables[4].target.style.fontSize = "18px";
		} else if (anim.progress <= 100) {
			anim.animatables[6].target.style.color = "Red";
			anim.animatables[5].target.style.color = "black";
			anim.animatables[6].target.style.fontSize = "32px";
			anim.animatables[5].target.style.fontSize = "18px";
		}
	},
	loop: true,
});

// Define the animation using Anime.js
anime({
	targets: ".animated-text2",
	translateY: [
		{ value: -50, duration: 50, easing: "linear", delay: 1000 },
		{ value: -100, duration: 50, easing: "linear", delay: 1000 },
		{ value: -150, duration: 50, easing: "linear", delay: 1000 },
		{ value: -200, duration: 50, easing: "linear", delay: 1000 },
		{ value: -250, duration: 50, easing: "linear", delay: 1000 },
	],
	update: function (anim) {
		if (anim.progress < 20) {
			anim.animatables[2].target.style.color = "Red";
			anim.animatables[6].target.style.color = "black";
		} else if (anim.progress < 40) {
			anim.animatables[3].target.style.color = "Red";
			anim.animatables[2].target.style.color = "black";
		} else if (anim.progress < 60) {
			anim.animatables[4].target.style.color = "Red";
			anim.animatables[3].target.style.color = "black";
		} else if (anim.progress < 80) {
			anim.animatables[5].target.style.color = "Red";
			anim.animatables[4].target.style.color = "black";
		} else if (anim.progress <= 100) {
			anim.animatables[6].target.style.color = "Red";
			anim.animatables[5].target.style.color = "black";
		}
	},
	loop: true,
});
