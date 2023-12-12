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

const instruments = [
	{
		label: "cryptocurrency",
		header: "What is CryptoCurrency?",
		content:
			"Cryptocurrencies, or Cryptos, are popular digital currencies that are changing the financial industry majorly. What makes them perfect for trading is the lack of physical form and decentralized nature, achieved by the use of Blockchain technology.",
		href: "#",
	},
	{
		label: "commodities",
		header: "What are Commodities?",
		content:
			"Commodities are popular digital currencies that are changing the financial industry majorly. What makes them perfect for trading is the lack of physical form and decentralized nature, achieved by the use of Blockchain technology.",
		href: "#",
	},
	{
		label: "energy",
		header: "What is Energy?",
		content:
			"In general, energies are naturally volatile markets because of the direct impact that world events can have on supply. Numerous political and environmental factors can affect energy prices, a good example would be the current Russian-Ukrainian conflict.",
		href: "#",
	},
	{
		label: "forex",
		header: "What is Forex?",
		content:
			"Forex are popular digital currencies that are changing the financial industry majorly. What makes them perfect for trading is the lack of physical form and decentralized nature, achieved by the use of Blockchain technology.",
		href: "#",
	},
	{
		label: "stocks",
		header: "What are Stocks?",
		content:
			"Stocks are popular digital currencies that are changing the financial industry majorly. What makes them perfect for trading is the lack of physical form and decentralized nature, achieved by the use of Blockchain technology.",
		href: "#",
	},
	{
		label: "metals",
		header: "What are Metals?",
		content:
			"Metals are popular digital currencies that are changing the financial industry majorly. What makes them perfect for trading is the lack of physical form and decentralized nature, achieved by the use of Blockchain technology.",
		href: "#",
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
		`<div class="flex flex-col lg:flex-row lg:justify-center gap-4 px-2 lg:px-40 my-12">`,
	];

	homeMenuNav.map((item) => {
		const btn = [`<a href="${item.href}" class="widget">${item.label}</a>`];
		container.push(btn);
	});
	container.push("</div");
	return container.join("");
}

function enableAnimation() {
	const tradingInstrumentLabel = document.querySelector("#tradingInstrumentLabel .text-container");
	const tradingInstrumentDescription = document.querySelector(
		"#tradingInstrumentDescription .text-container"
	);

	const duration = 100;
	const easing = "easeInOutBounce";
	const delay = 1000;

	const baseGreen = "hsl(115, 43%, 52%)";
	const deepSlateBlue = "hsl(134, 80%, 10%)";

	const leftContainerAnimation = anime({
		targets: "#tradingInstrumentLabel .animated-text",
		translateY: [
			{ value: -48, duration: duration, easing: easing, delay: delay },
			{ value: -96, duration: duration, easing: easing, delay: delay },
			{ value: -144, duration: duration, easing: easing, delay: delay },
			{ value: -192, duration: duration, easing: easing, delay: delay },
			{ value: -240, duration: duration, easing: easing, delay: delay },
			{ value: -288, duration: duration, easing: easing, delay: delay },
		],
		update: function (anim) {
			if (anim.progress <= 16.7) {
				anim.animatables[1].target.style.color = baseGreen;
				anim.animatables[6].target.style.color = deepSlateBlue;
			} else if (anim.progress <= 33.3) {
				anim.animatables[2].target.style.color = baseGreen;
				anim.animatables[1].target.style.color = deepSlateBlue;
			} else if (anim.progress <= 50) {
				anim.animatables[3].target.style.color = baseGreen;
				anim.animatables[2].target.style.color = deepSlateBlue;
			} else if (anim.progress <= 66.6) {
				anim.animatables[4].target.style.color = baseGreen;
				anim.animatables[3].target.style.color = deepSlateBlue;
			} else if (anim.progress <= 83.3) {
				anim.animatables[5].target.style.color = baseGreen;
				anim.animatables[4].target.style.color = deepSlateBlue;
			} else if (anim.progress <= 100) {
				anim.animatables[6].target.style.color = baseGreen;
				anim.animatables[5].target.style.color = deepSlateBlue;
			}
		},
		loop: true,
	});

	const rightContainerAnimation = anime({
		targets: "#tradingInstrumentDescription .animated-text",
		translateY: [
			{ value: -240, duration: duration, easing: easing, delay: delay },
			{ value: -480, duration: duration, easing: easing, delay: delay },
			{ value: -720, duration: duration, easing: easing, delay: delay },
			{ value: -960, duration: duration, easing: easing, delay: delay },
			{ value: -1200, duration: duration, easing: easing, delay: delay },
			{ value: -1440, duration: duration, easing: easing, delay: delay },
		],
		loop: true,
	});

	tradingInstrumentLabel.addEventListener("mouseenter", () => {
		leftContainerAnimation.pause();
		rightContainerAnimation.pause();
	});

	tradingInstrumentLabel.addEventListener("mouseleave", () => {
		leftContainerAnimation.play();
		rightContainerAnimation.play();
	});

	tradingInstrumentDescription.addEventListener("mouseenter", () => {
		leftContainerAnimation.pause();
		rightContainerAnimation.pause();
	});

	tradingInstrumentDescription.addEventListener("mouseleave", () => {
		leftContainerAnimation.play();
		rightContainerAnimation.play();
	});
}

function renderTradingInstrumentSection() {
	const tradingInstrument = document.getElementById("tradingInstrument");

	const leftContainer = [
		`<div id="tradingInstrumentLabel" class="left-container bg-black h-1/2 md:h-auto md:w-1/2 flex flex-col justify-center px-8 lg:px-32 gap-4">`,
		`	<h2 class="font-bold text-white">Trade</h2>`,
		`	<div class="text-container">`,
		`		<div class="animated-text-container">`,
		`			<div class="animated-text">Metal</div>`,
		`			<div class="animated-text">Cryptocurrencies</div>`,
		`			<div class="animated-text">Commodities</div>`,
		`			<div class="animated-text">Energy</div>`,
		`			<div class="animated-text">Forex</div>`,
		`			<div class="animated-text">Stocks</div>`,
		`			<div class="animated-text">Metal</div>`,
		`			<div class="animated-text">Cryptocurrencies</div>`,
		`		</div>`,
		`	</div>`,
		`	<h2 class="font-bold text-white">With Us</h2>`,
		`</div>`,
	].join("");

	const rightContainerContent = [];
	instruments.map((item) => {
		const div = [
			`<div class="animated-text flex flex-col gap-4">`,
			`	<h4 class="text-white font-semibold">${item.header}</h4>`,
			`	<p class="text-white line-clamp-5">${item.content}</p>`,
			`	<a class="text-btn" href="${item.href}">Read More<h4 class="bi bi-arrow-right-short font-bold"></h4></a>`,
			`</div>`,
		].join("");
		rightContainerContent.push(div);
	});

	const rightContainer = [
		`<div id="tradingInstrumentDescription" class="right-container bg-black opacity-90 h-1/2 md:h-auto md:w-1/2 flex flex-col justify-center px-8 gap-4">`,
		`	<div class="text-container">`,
		`			<div class="animated-text-container">${rightContainerContent.join("")}</div>`,
		`	</div>`,
		`</div>`,
	].join("");

	const container = [
		`<div class="flex flex-col md:flex-row h-[65rem] md:h-[30rem] overflow-hidden">`,
		leftContainer,
		rightContainer,
		`</div>`,
	].join("");

	tradingInstrument.innerHTML = container;

	enableAnimation();
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
		`<button class="tombol-block lg:tombol lg:tombol-sedeng lg:rounded-lg">${buttonLabel}</button>`,
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

	const logoItem = [];
	partnershipLogo.map((item) => {
		logoItem.push(
			`<a href="#" class="flex"><img src="assets/img/org/${item.src}" class="object-contain mx-auto max-h-40" /><a>`
		);
	});

	logoItem.join("");

	const partnershipContainer = [
		`<div class="flex flex-col gap-4 py-20">`,
		` <h1 class="font-bold text-3xl md:text-5xl lg:text-6xl text-center mb-8">Partnership</h1>`,
		` <div class="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4 px-2">`,
		`	${logoItem}`,
		`	</div>`,
		`</div>`,
	];

	// partnershipContainer.push(`</div></div>`);

	return partnershipContainer.join("");
}

document.addEventListener("DOMContentLoaded", () => {
	const homeMenuNav = document.getElementById("homeMenuNav");
	homeMenuNav.innerHTML = renderHomeMenuNavSection();

	renderTradingInstrumentSection();

	const tradableInstrumentSection = document.getElementById("tradableInstrument");
	tradableInstrumentSection.innerHTML = renderTradableInstrumentSection();

	renderNewsSection();

	const partnership = document.getElementById("partnership");
	partnership.innerHTML = renderPartnershipSection();

	const carousel = document.getElementById("carousel");

	anime({
		targets: carousel,
		translateX: [
			{ value: -1200, duration: 100, easing: "linear", delay: 1000 },
			{ value: -2400, duration: 100, easing: "linear", delay: 1000 },
			{ value: -3600, duration: 100, easing: "linear", delay: 1000 },
			{ value: -4800, duration: 100, easing: "linear", delay: 1000 },
		],
		loop: true,
	});
});
