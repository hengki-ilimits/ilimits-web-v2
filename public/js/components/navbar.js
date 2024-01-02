function NavBarMenuListItem(navBarListItem) {
	const element = [];
	navBarListItem.map((item) => {
		element.push(
			`<div><a href="${item.menuHref}" class="navbarMenuLink">${item.menuName}</a></div>`
		);
	});
	return element.join("");
}

function NavBarLanguageOptionList(languageList) {
	const element = [];

	languageList.map((item) => {
		element.push(
			[
				`<li lang="${item.menuHref}" class="hover:bg-baseGreen rounded-md">`,
				`	<a class="flex justify-start items-center text-base gap-5">`,
				`		<div><img src="/assets/img/icons/flag-language-circle/flag-${item.menuHref}.png" class="h-4" /></div>`,
				`		<span class="text-base">${item.menuName}</span>`,
				`	</a>`,
				`</li>`,
			].join("")
		);
	});

	return element.join("");
}

function NavBarLanguageOptionListMobile(languageList) {
	const element = [];

	languageList.map((item) => {
		element.push(
			[
				`<li lang="${item.menuHref}" class="hover:bg-baseGreen rounded-md">`,
				`	<a class="flex justify-start items-center text-base gap-5">`,
				`		<div><img src="/assets/img/icons/flag-language-circle/flag-${item.menuHref}.png" class="h-4" /></div>`,
				`		<span class="text-base">${item.menuName}</span>`,
				`	</a>`,
				`</li>`,
			].join("")
		);
	});

	return element.join("");
}

function NavbarSectionComponent(navbarData) {
	function composeComponent(navbarDataItem) {
		const { navBar, memberAreaButton, language } = navbarDataItem;

		const container = [`<div class="w-full flex justify-between items-center">`];

		// navbar logo
		container.push(
			`<a href="/" class="h-full"><img src="/assets/img/logo.svg" class="h-full" /></a>`
		);

		// outer container
		const outerContainer = [`<div class="flex items-center gap-4 h-full hidden xl:flex">`];

		// menu item
		const navbarMenuContainer = [
			`<div id="navbarMenu" class="flex gap-4">`,
			`${NavBarMenuListItem(navBar)}`,
			`</div>`,
		];
		outerContainer.push(navbarMenuContainer.join(""));

		// language option item
		const navbarLanguageOptionContainer = [
			`<div id="navbarLanguageOption" class="dropdown dropdown-end">`,
			`	<label tabindex="0">`,
			`		<div class="w-12 cursor-pointer h-full flex justify-center items-center rounded-lg">`,
			`			<h3 class="bi bi-translate text-baseGreen font-semibold p-2 rounded-md hover:bg-baseOrange hover:text-white"></h3>`,
			`		</div>`,
			`	</label>`,
			`	<ul id="optionLanguages" tabindex="0" class="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-max font-semibold">`,
			`	${NavBarLanguageOptionList(language)}`,
			`	</ul>`,
			`</div>`,
		];
		outerContainer.push(navbarLanguageOptionContainer.join(""));

		// login button
		const navbarLoginContainer = [
			`<div id="navbarLogin" class="flex gap-4">`,
			`	<a href="${memberAreaButton[1].menuHref}" target="_blank" class="tombol-lg-info">${memberAreaButton[1].menuName}</a>`,
			`	<a href="${memberAreaButton[0].menuHref}" target="_blank" class="tombol-lg">${memberAreaButton[0].menuName}</a>`,
			`</div>`,
		].join("");
		outerContainer.push(navbarLoginContainer);

		// outer container close div
		outerContainer.push("</div>");
		container.push(outerContainer.join(""));

		// language option mobile
		const navbarLanguageOptionMobileContainer = [
			`<div class="xl:hidden flex justify-between items-center gap-4">`,
			`	<div class="dropdown dropdown-end xl:hidden">`,
			`		<label tabindex="0">`,
			`			<div class="w-12 cursor-pointer h-full flex justify-center items-center rounded-lg">`,
			`				<h2 class="bi bi-translate text-baseGreen font-semibold p-2 rounded-md hover:bg-baseOrange hover:text-white"></h2>`,
			`			</div>`,
			`		</label>`,
			`		<ul id="optionLanguagesMobile" tabindex="0" class="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-max font-semibold">`,
			`		${NavBarLanguageOptionListMobile(language)}`,
			`		</ul>`,
			`	</div>`,
			`	<div id="openDrawer"><h1 class="bi bi-list menuList"></h1></div>`,
			`</div>`,
		].join("");

		container.push(navbarLanguageOptionMobileContainer);
		// container close div
		container.push("</div>");

		return container.join("");
	}

	promiseRender(() => composeComponent(navbarData))
		.then((result) => {
			const navbar = document.getElementById("navbar");
			navbar.innerHTML = result;
		})
		.then(() => {
			handleChangeLanguage();
		})
		.catch((error) => {
			const navbar = document.getElementById("navbar");
			navbar.innerHTML = error;
		});
}

function renderNavBar() {
	sendRequest((returnedData) => {
		NavbarSectionComponent(returnedData);
	}, "components/navbar");
}
