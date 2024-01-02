const languageOptionObject = [
	{
		languageCode: "en",
		label: "English",
		imageUrl: "assets/img/icons/flag-language-circle/flag-united-kingdom.png",
	},
	{
		languageCode: "id",
		label: "Indonesia",
		imageUrl: "assets/img/icons/flag-language-circle/flag-indonesia.png",
	},
	{
		languageCode: "en",
		label: "Malaysia",
		imageUrl: "assets/img/icons/flag-language-circle/flag-malaysia.png",
	},
];

function MultiLanguageOption() {
	const container = [`<div id="navbarLanguageOption" class="dropdown dropdown-end">`];

	const label = [
		`<label tabindex="0">`,
		`<div class="w-12 cursor-pointer h-full flex justify-center items-center rounded-lg">`,
		`<h3
				class="bi bi-translate text-baseGreen font-semibold p-2 rounded-md hover:bg-baseOrange hover:text-white"></h3>`,
		`</div>`,
		`</label>`,
	].join("");

	container.push(label);

	const itemListContainer = [
		`<ul id="optionLanguages" tabindex="0" class="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-max font-semibold">`,
	];

	languageOptionObject.map((item) => {
		itemListContainer.push(
			[
				`<li lang="${item.languageCode}" class="hover:bg-baseGreen rounded-md">`,
				`<a class="flex justify-start items-center text-base gap-5">`,
				`<div><img src="${item.imageUrl}" class="h-4" /></div>`,
				`<span class="text-base">${item.label}</span>`,
				`</a>`,
				`</li>`,
			].join("")
		);
	});

	itemListContainer.push(`</ul>`);

	container.push(itemListContainer);
	container.push(`</div>`);
	return container.join("");
}

function NavbarSectionComponent(navbarData) {
	function composeComponent(navbarDataItem) {
		const navbarComponent = [`<div id="navbarMenu" class="flex gap-8 items-center">`];
		navbarDataItem.map((item) => {
			navbarComponent.push(
				`<div><a href="${item.menuHref}" class="navbarMenuLink text-lg">${item.menuName}</a></div>`
			);
		});

		navbarComponent.push(MultiLanguageOption());

		const navbarLogin = [
			`<div id="navbarLogin" class="flex gap-4">`,
			`<a href="https://my.ilimits.com/en/login" target="_blank" class="tombol-lg-info">LOGIN</a>`,
			`<a href="https://my.ilimits.com/en/register" target="_blank" class="tombol-lg">REGISTER NOW</a>`,
			`</div>`,
		].join("");

		navbarComponent.push(navbarLogin);

		navbarComponent.push("</div>");
		return navbarComponent.join("");
	}

	promiseRender(() => composeComponent(navbarData))
		.then((result) => {
			const menuContainer = document.getElementById("menuContainer");
			menuContainer.innerHTML = result;
		})
		.catch((error) => {
			const menuContainer = document.getElementById("menuContainer");
			menuContainer.innerHTML = error;
		});
}

function DefaultComponent() {
	return [
	`<div class="w-full flex justify-between items-center">`,
		`<a href="/" class="h-full"><img src="/assets/img/logo.svg" class="h-full" /></a>`,
		`<div class="flex items-center gap-4 h-full hidden xl:flex">`,
			`<div id="navbarMenu" class="flex gap-4">`,
				`<div><a href="/" class="navbarMenuLink">HOME</a></div>`,
				`<div><a href="/route/trading" class="navbarMenuLink">TRADING</a></div>`,
				`<div><a href="#" class="navbarMenuLink">INVESTMENT</a></div>`,
				`<div><a href="#" class="navbarMenuLink">PLATFORM</a></div>`,
				`<div><a href="#" class="navbarMenuLink">PROMOTION</a></div>`,
				`<div><a href="#" class="navbarMenuLink">ABOUT US</a></div>`,
			`</div>`,
			`<div id="navbarLanguageOption" class="dropdown dropdown-end">`,
				`<label tabindex="0">`,
					`<div class="w-12 cursor-pointer h-full flex justify-center items-center rounded-lg">`,
						`<h3 class="bi bi-translate text-baseGreen font-semibold p-2 rounded-md hover:bg-baseOrange hover:text-white"></h3>`,
					`</div>`,
				`</label>`,
				`<ul id="optionLanguages" tabindex="0" class="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-max font-semibold">`,
					`<li lang="en" class="hover:bg-baseGreen rounded-md">`,
						`<a class="flex justify-start items-center text-base gap-5">`,
							`<div><img src="/assets/img/icons/flag-language-circle/flag-united-kingdom.png" class="h-4" /></div>`,
							`<span class="text-base">English</span>`,
						`</a>`,
					`</li>`,
					`<li lang="id" class="hover:bg-baseGreen rounded-md">`,
						`<a class="flex justify-start items-center text-base gap-5">`,
							`<div><img src="/assets/img/icons/flag-language-circle/flag-indonesia.png" class="h-4" /></div>`,
							`<span class="text-base">Indonesia</span>`,
						`</a>`,
					`</li>`,
					`<li lang="my" class="hover:bg-baseGreen rounded-md">`,
						`<a class="flex justify-start items-center text-base gap-5">`,
							`<div><img src="/assets/img/icons/flag-language-circle/flag-malaysia.png" class="h-4" /></div>`,
							`<span class="text-base">Malaysia</span>`,
						`</a>`,
					`</li>`,
				`</ul>`,
			`</div>`,
			`<div id="navbarLogin" class="flex gap-4">`,
				`<a href="https://my.ilimitsinv.com/en/login" target="_blank" class="tombol-lg-info">LOGIN</a>`,
				`<a href="https://my.ilimitsinv.com/en/register" target="_blank" class="tombol-lg">REGISTER NOW</a>`,
			`</div>`,
		`</div>`,
		`<div class="xl:hidden flex justify-between items-center gap-4">`,
			`<div class="dropdown dropdown-end xl:hidden">`,
				`<label tabindex="0">`,
					`<div class="w-12 cursor-pointer h-full flex justify-center items-center rounded-lg">`,
						`<h2 class="bi bi-translate text-baseGreen font-semibold p-2 rounded-md hover:bg-baseOrange hover:text-white"></h2>`,
					`</div>`,
				`</label>`,
				`<ul id="optionLanguagesMobile" tabindex="0" class="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-max font-semibold">`,
					`<li lang="en" class="hover:bg-baseGreen rounded-md">`,
						`<a class="flex justify-start items-center text-base gap-5">`,
							`<div><img src="/assets/img/icons/flag-language-circle/flag-united-kingdom.png" class="h-4" /></div>`,
							`<span class="text-base">English</span>`,
						`</a>`,
					`</li>`,
					`<li lang="id" class="hover:bg-baseGreen rounded-md">`,
						`<a class="flex justify-start items-center text-base gap-5">`,
							`<div><img src="/assets/img/icons/flag-language-circle/flag-indonesia.png" class="h-4" /></div>`,
							`<span class="text-base">Indonesia</span>`,
						`</a>`,
					`</li>`,
					`<li lang="my" class="hover:bg-baseGreen rounded-md">`,
						`<a class="flex justify-start items-center text-base gap-5">`,
							`<div><img src="/assets/img/icons/flag-language-circle/flag-malaysia.png" class="h-4" /></div>`,
							`<span class="text-base">Malaysia</span>`,
						`</a>`,
					`</li>`,
				`</ul>`,
			`</div>`,
			`<div id="openDrawer"><h1 class="bi bi-list menuList"></h1></div>`,
		`</div>`,
	`</div>`].join("");
}

function renderNavBar() {
	const navbarSection = document.getElementById("navbar");
	navbarSection.innerHTML = DefaultComponent();
	// sendRequest((returnedData) => {
	// 	NavbarSectionComponent(returnedData.NAVBAR);
	// }, "groupMenuMapping/navbar");
}
