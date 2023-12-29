function FooterInfoMenuComponent(infoMenuItemsData, socialMediaItemsData, footerMenu) {
	const infoAndMenuComponent = [
		`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:space-x-20 lg:space-x-64 py-8">`,
	];
	const container = [`<div class="flex flex-col gap-8 mb-12">`];

	const logo = [`<div><img src="/assets/img/logo.svg" alt="iLimits Logo" /></div>`];
	container.push(logo);

	const licenseInfo = [
		`<h6 id="companyLicenseInfo" class="flex text-gray-500 text-base md:text-sm font-normal">`,
	];
	infoMenuItemsData.map((item) => {
		licenseInfo.push(item.contentParagraph);
	});
	licenseInfo.push("</h6>");
	container.push(licenseInfo.join(""));

	const socialMediaComponent = [
		`<div id="socialMediaIconSection" class="flex flex-row gap-5 items-center">`,
	];
	socialMediaItemsData.map((item) => {
		socialMediaComponent.push(
			`<a href="${
				item.href
			}" target="_blank"><h2 class="bi bi-${item.name.toLowerCase()} text-gray-500"></h2></a>`
		);
	});
	socialMediaComponent.push(`</div>`);
	container.push(socialMediaComponent.join(""));

	container.push("</div>");

	infoAndMenuComponent.push(container.join(""));

	const siteMenuComponent = [`<div id="footerSiteMenu" class="flex space-x-20 md:justify-start">`];
	footerMenu.map((groupMenu) => {
		siteMenuComponent.push(`<div class="flex flex-col gap-2">`);
		siteMenuComponent.push(
			`<h6 class="font-medium text-gray-500">${groupMenu.menu[0].groupMenuDisplayName}</h6>`
		);
		groupMenu.menu.map((menu) => {
			siteMenuComponent.push(`<a class="menu-link" href="${menu.menuHref}">${menu.menuName}</a>`);
		});
		siteMenuComponent.push(`</div>`);
	});
	siteMenuComponent.push(`</div>`);

	infoAndMenuComponent.push(siteMenuComponent.join(""));
	infoAndMenuComponent.push("</div>");

	return infoAndMenuComponent.join("");
}

function FooterInfoComponent(footerInfoItemsData) {
	const footerInfoComponent = [
		`<div id="footerInfoContainer" class="flex flex-col py-8 border-t border-gray-300 text-gray-500">`,
	];

	footerInfoItemsData.map((item) => {
		footerInfoComponent.push(`<h5 class="font-bold">${item.contentHeading}</h5>`);
		footerInfoComponent.push(item.contentParagraph);
		footerInfoComponent.push(`<br/><br/>`);
	});

	footerInfoComponent.push("</div>");

	return footerInfoComponent.join("");
}

function CopyrightComponent(copyrightItemsData) {
	const copyrightComponent = [
		`<div id="footerCopyright" class="flex py-8 border-t border-gray-300 justify-start items-center text-gray-500">`,
	];

	copyrightItemsData.map((itemData) => {
		copyrightComponent.push(`${itemData.contentParagraph}`);
	});

	copyrightComponent.push("</div>");

	return copyrightComponent.join("");
}

function renderFooter() {
	const footer = document.getElementById("footer");
	footer.innerHTML = SectionPlaceholderComponent();

	requestComponent((returnedData) => {
		function composeComponent({ copyright, footerInfo, infoAndMenu, socialMedia, siteMenu }) {
			const components = [];
			components.push(FooterInfoMenuComponent(infoAndMenu, socialMedia, siteMenu));
			components.push(FooterInfoComponent(footerInfo));
			components.push(CopyrightComponent(copyright));
			return components.join("");
		}

		promiseRender(() => composeComponent(returnedData.Footer))
			.then((result) => {
				const footer = document.getElementById("footer");
				footer.innerHTML = result;
			})
			.catch((error) => {
				const footer = document.getElementById("footer");
				footer.innerHTML = error;
			});
	}, "components/footer");
}
