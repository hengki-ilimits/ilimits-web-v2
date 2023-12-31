const partnershipLogo = [
	{
		id: "sca1",
		src: "sca_logo.webp",
	},
	{
		id: "dmcc1",
		src: "dmcc_logo.webp",
	},
	{
		id: "dgcx1",
		src: "dgcx_logo.webp",
	},
];

const instrumentsLogo = [
	{
		id: "fx1",
		src: "Forex-icon-black.svg",
		label: "Forex",
	},
	{
		id: "mtl1",
		src: "icon-metals.svg",
		label: "Metal",
	},
	{
		id: "stock1",
		src: "icon-stocks.svg",
		label: "Stock",
	},
	{
		id: "ind1",
		src: "icon-indices.svg",
		label: "Indices",
	},
	{
		id: "eng1",
		src: "icon-energy.svg",
		label: "Energy",
	},
];

const homeMenuNav = [
	{
		id: "hmn1",
		label: "Trading",
		href: "/trading/",
	},
	{
		id: "hmn2",
		label: "Platform",
		href: "/platform/",
	},
	{
		id: "hmn3",
		label: "Promotions",
		href: "/promotion/",
	},
	{
		id: "hmn4",
		label: "About",
		href: "/aboutUs/",
	},
	{
		id: "hmn5",
		label: "Regulations",
		href: "/regulations/",
	},
];

function renderNewsSection() {
	const container = document.querySelector("#container");
	const screenWidth = window.innerWidth || document.documentElement.clientWidth;
	container.style.width = `100%`;
	textContainer.style.width = `2000px`;
	for (let n = 0; n < textContainer.children.length; n++) {
		const child = textContainer.children[n];
		child.style.width = `200px`;
	}

	// Initialize Anime.js animation
	const newsTextElement = document.getElementById("textContainer");

	const animeAnimation = anime({
		targets: newsTextElement,
		translateX: [
			// { value: "0px", duration: 0 }, // Initial position (off-screen)
			{ value: "-400px", duration: 3000 }, // Final position (off-screen)
		],
		easing: "linear",
		loop: true,
		direction: "normal",
	});

	// Pause the animation on hover
	container.addEventListener("mouseenter", () => {
		animeAnimation.pause();
	});

	// Resume the animation when the mouse leaves
	container.addEventListener("mouseleave", () => {
		animeAnimation.play();
	});
}

function renderHomeMenuNavSection() {
	const container = [
		`<div class="flex flex-col lg:flex-row lg:justify-center gap-2 px-2 lg:px-12 my-12">`,
	];

	homeMenuNav.map((item) => {
		const btn = [
			`<a href="${item.href}" class="text-link-block-sm lg:text-link-sm lg:rounded-md">${item.label}</a>`,
		];
		container.push(btn);
	});
	container.push("</div");
	return container.join("");
}

function renderTradableInstrumentSection() {
	const headingText = "A World of Financial Markets in the Palm of Your Hand";
	const subheadingText =
		"With iLimits you have instant access to the worlds most heavily traded instruments withease through a multi award-winning trading app and access to MT4 with full EA integration.";

	const buttonLabel = "See All Tradable Instruments";

	const container = [`<div class="px-4 lg:px-20 py-20">`];
	const heading = [`<h1 class="text-gray-900 font-semibold text-center">${headingText}</h1>`];
	const subHeading = [`<h4 class="text-gray-900 text-center">${subheadingText}</h4>`];

	container.push(heading);
	container.push(subHeading);

	const outerContainer = [`<div class="flex flex-col items-center gap-12 py-20 px-4">`];

	const innerContainer = [
		`<div class="flex w-full md:w-auto justify-center gap-8 sm:gap-20 lg:gap-40">`,
	];

	instrumentsLogo.map((item) => {
		const instrumentDiv = [
			`<div class="flex flex-col w-8 lg:w-16 items-center gap-6 cursor-pointer hover:underline">`,
			`	<img src="assets/img/icons/${item.src}" />`,
			`	<h6 class="font-bold text-gray-600 text-xs sm:text-sm">${item.label}</h6>`,
			`</div>`,
		];

		innerContainer.push(instrumentDiv.join(""));
	});

	innerContainer.push("</div>");

	const allInstrumentsButton = [
		`<button class="btn-primary-block-sm lg:btn-primary">${buttonLabel}</button>`,
	];

	outerContainer.push(innerContainer.join(""));
	outerContainer.push(allInstrumentsButton);
	outerContainer.push("</div>");

	container.push(outerContainer.join(""));
	container.push(`</div>`);

	return container.join("");
}

function renderPartnershipSection() {
	const columnNumber = partnershipLogo.length >= 4 ? 4 : partnershipLogo.length;

	const partnershipContainer = [
		`<div class="flex flex-col gap-4 py-20">`,
		` <h1 class="font-bold text-3xl md:text-5xl lg:text-6xl text-center mb-8">Partnership</h1>`,
		` <div class="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4">`,
	];

	partnershipLogo.map((item) => {
		const logoItem = [
			`<a href="#" class="flex"><img src="assets/img/org/${item.src}" class="object-contain mx-auto max-h-40" /></a>`,
		];
		partnershipContainer.push(logoItem);
	});

	partnershipContainer.push(`</div></div>`);

	return partnershipContainer.join("");
}

document.addEventListener("DOMContentLoaded", () => {
	const homeMenuNav = document.getElementById("homeMenuNav");
	homeMenuNav.innerHTML = renderHomeMenuNavSection();

	const tradableInstrumentSection = document.getElementById("tradableInstrument");
	tradableInstrumentSection.innerHTML = renderTradableInstrumentSection();

	renderNewsSection();

	const partnership = document.getElementById("partnership");
	partnership.innerHTML = renderPartnershipSection();
});
