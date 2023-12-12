function handleToggleSideBar() {
	let screenWidth = window.innerWidth;
	let sideBarWidth = "100%";
	const sideBarElement = document.getElementById("sidebar");

	const closeSideBarButton = document.getElementById("sidebarClose");
	closeSideBarButton.addEventListener("mouseup", () => {
		screenWidth = window.innerWidth;
		sideBarWidth = "100%";
		if (screenWidth >= 768) {
			sideBarWidth = "50%";
		}
		sideBarElement.style.width = sideBarWidth;
		anime({
			targets: sideBarElement,
			left: "2000px",
			easing: "easeInOutQuad", // Set easing function as desired
			duration: 300, // Set the duration of the animation in milliseconds
		});
	});

	const openSideBarButton = document.getElementById("hamburger");
	openSideBarButton.addEventListener("mouseup", () => {
		screenWidth = window.innerWidth;
		sideBarWidth = "100%";
		let leftValue = 0;

		if (screenWidth >= 768) {
			sideBarWidth = "50%";
			leftValue = screenWidth / 2;
		}
		sideBarElement.style.width = sideBarWidth;
		anime({
			targets: sideBarElement,
			left: leftValue,
			easing: "easeInOutQuad",
			duration: 300,
		});
	});
}

function renderSideBar() {
	// Event Handler
	// Open and Close Side Bar
	handleToggleSideBar();
}

document.addEventListener("DOMContentLoaded", () => {
	renderSideBar();
});
