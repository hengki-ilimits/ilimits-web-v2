function FeatureBox(homeFeatureItem) {
	function composeComponent(homeFeatureItemData) {
		const { defaultEndPoint, contentImageId, contentHeading, contentSubHeading } =
			homeFeatureItemData;

		const featureBoxComponent = [];

		featureBoxComponent.push(`<div id="${contentImageId}-loader" class="loaderImg mx-auto"></div>`);
		featureBoxComponent.push(`<h3 class="font-bold">${contentHeading}</h3>`);
		featureBoxComponent.push(`${contentSubHeading}`);

		promiseLoadImage(defaultEndPoint + contentImageId).then((loadedImage) => {
			const loader = document.getElementById(contentImageId + "-loader");
			loader.classList.remove("loaderImg", "mx-auto");
			loader.appendChild(loadedImage.target);
		});

		return featureBoxComponent.join("");
	}

	promiseRender(() => composeComponent(homeFeatureItem))
		.then((result) => {
			const featureBoxElement = document.getElementById(homeFeatureItem.contentImageId);
			featureBoxElement.innerHTML = result;
		})
		.catch((error) => {
			const featureBoxElement = document.getElementById(homeFeatureItem.contentImageId);
			featureBoxElement.innerHTML = error;
		});

	return [
		`<div id="${homeFeatureItem.contentImageId}" class="featureBox">`,
		`<div class="loader5 mx-auto"></div>`,
		`</div>`,
	].join("");
}

function HomeFeatureSectionComponent(homeFeatures) {
	const container = [
		`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-12 py-20">`,
	];

	homeFeatures.map((homeFeatureItem) => {
		container.push(FeatureBox(homeFeatureItem));
	});

	container.push(`</div>`);

	return container.join("");
}

function renderHomeFeature() {
	const homeFeatures = document.getElementById("homeFeatures");
	homeFeatures.innerHTML = SectionPlaceholderComponent();

	requestComponent((returnedData) => {
		homeFeatures.innerHTML = HomeFeatureSectionComponent(returnedData.homeFeatures);
	}, "components/feature/homeFeatures");
}
