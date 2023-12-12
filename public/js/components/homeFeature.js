function FeatureBox({ id, heading, textContent, imageUrl }) {
	return [
		`<div class="featureBox">`,
		`    <img src="${IMAGE_BASE_URL}${imageUrl}" />`,
		`    <h3 class="font-bold">${heading}</h3>`,
		`    <p>${textContent}</p>`,
		`</div>`,
	].join("");
}

function HomeFeatureSectionComponent(contentData) {
	// const container = [`<div class="flex justify-evenly gap-12 px-12 py-20">`];
    const container = [`<div class="grid grid-cols-3 gap-12 px-12 py-20">`];

	contentData.map((item) => {
		container.push(FeatureBox(item));
	});

	container.push(`</div>`);

	return container.join("");
}

function renderHomeFeature() {
	const homeFeatures = document.getElementById("homeFeatures");

	fetchData((data) => {
		homeFeatures.innerHTML = HomeFeatureSectionComponent(data);
	}, "sectionContent");
}
