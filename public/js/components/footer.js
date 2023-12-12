const companyLicenseInfo =
	"iLimits Investment Limited Liability Company (trading name : iLimits) is incorporated in Dubai (Registered No. 2083540) with licenses No (1237919)";

// ===COMPONENT===
function SiteMenuSectionComponent(siteMenuData) {
	const menu = [];
	const htmlData = groupByParameterToArrayOfObjects(siteMenuData, "groupName");
	htmlData.map((htmlContent) => {
		const groupName = htmlContent.groupName;
		const groupMenu = htmlContent.items;

		menu.push(`<div class="flex flex-col gap-2">`);
		menu.push(`<h6 class="font-medium text-gray-500">${groupName}</h6>`);
		groupMenu.map((item) => {
			menu.push(`${addCssClassToHtmlTag(item.href, "a", "menu-link")}`);
		});
		menu.push("</div>");
	});

	return menu.join("");
}

function LicenseInfoSectionComponent(licenseInfo, socialMediaInfo) {
	return [
		`<div class="flex flex-col gap-8 mb-12">`,
		` <div>`,
		`   <img src="/assets/img/logo.svg" alt="iLimits Logo" />`,
		` </div>`,
		` <h6 class="text-gray-500 text-base md:text-sm font-normal">${licenseInfo}</h6>`,
		` <div id="socialMediaIconSection" class="flex flex-row gap-5 items-center"></div>`,
		`</div>`,
	].join("");
}

function ErrorReloadComponent() {
	return [
		`<a href="#" onclick="window.location.reload();" class="flex mx-auto hover:underline">`,
		`<h4 class="bi bi-arrow-clockwise mr-2"></h4>`,
		`<p>Something went wrong!</p>`,
		`</a>`,
	].join("");
}

function FooterInfoSectionComponent(footerInfo, errorResponse) {
	let footerInfoComponent = [`<div class="flex py-8 border-t border-gray-300 text-gray-500">`];

	if (errorResponse) {
		footerInfoComponent.push(ErrorReloadComponent());
	} else {
		footerInfoComponent.push(`${footerInfo}`);
	}
	footerInfoComponent.push(`</div>`);

	return footerInfoComponent.join("");
}

function CopyrightSectionComponent(copyrightText, errorResponse) {
	let copyrightComponent = [
		`<div class="flex py-8 border-t border-gray-300 justify-start items-center text-gray-500">`,
	];

	if (errorResponse) {
		copyrightComponent.push(ErrorReloadComponent());
	} else {
		copyrightComponent.push(`<p>${copyrightText}</p>`);
	}
	copyrightComponent.push(`</div>`);

	return copyrightComponent.join("");
}

// ===FETCHING
function fetchData(callback, endPoint) {
	fetch(`/api/${endPoint}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((items) => {
			if (items.length > 0) {
				callback(items);
			} else {
				throw new Error("Something went wrong");
			}
		})
		.catch((error) => {
			console.error(`Error fetching and rendering ${endPoint}:, ${error}`);
			callback();
		});
}

// ===RENDER
function renderFooter() {
	fetchData((data) => {
		const responseError = data === undefined;
		const sectionId = ["footerCopyright", "footerInfo"];
		sectionId.map((sectionIdValue) => {
			let sectionData = {
				textContent: "Something went wrong!",
			};

			if (!responseError) {
				sectionData = data.find(
					(sectionItem) => sectionItem.sectionId.toUpperCase() === sectionIdValue.toUpperCase()
				);
			}

			// render copyright info
			if (sectionIdValue === "footerCopyright") {
				const copyrightSection = document.getElementById("copyright");
				copyrightSection.innerHTML = CopyrightSectionComponent(
					sectionData.textContent,
					responseError
				);
			} else if (sectionIdValue === "footerInfo") {
				// render footer info
				const footerInfoSection = document.getElementById("footerInfo");
				footerInfoSection.innerHTML = FooterInfoSectionComponent(
					sectionData.textContent,
					responseError
				);
			}
		});

		const licenseInfo = data.find(
			(item) => item.sectionId.toUpperCase() === "FOOTERCOMPANYINFO"
		).textContent;

		const licenseInfoSection = document.getElementById("footerLicenseInfo");
		licenseInfoSection.innerHTML = LicenseInfoSectionComponent(licenseInfo);
	}, "footer");

	fetchData((data) => {
		const socialMediaIcons = [];
		data.map((socialMediaItem) => {
			socialMediaIcons.push(
				`<a href="${
					socialMediaItem.href
				}"><h2 class="bi bi-${socialMediaItem.name.toLowerCase()} text-gray-400"></h2></a>`
			);
		});

		const socialMediaIconSection = document.getElementById("socialMediaIconSection");
		socialMediaIconSection.innerHTML = socialMediaIcons.join("");
	}, "socialMedia");

	fetchData((data) => {
		const siteMenuSection = document.getElementById("siteMenu");
		siteMenuSection.innerHTML = SiteMenuSectionComponent(data);
	}, "siteMenu");
}

// 1. Render
// 2. Fetch
// 3. Get Component