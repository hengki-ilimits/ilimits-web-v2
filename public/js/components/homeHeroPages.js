function HeroPageSectionComponent(heroImageData) {
	heroImageData.HomeHeroPages.map((heroSection) => {
		const { id, imageHeroHref, imageId, sectionId, sectionName, defaultEndPoint } = heroSection;
		promiseLoadImage(defaultEndPoint + imageId).then((loadedImage) => {
			const heroImageSection = document.getElementById("heroImage");
			const loader = heroImageSection.querySelector("div");
			heroImageSection.removeChild(loader);

			const anchor = document.createElement("a");
			anchor.href = imageHeroHref;

			anchor.appendChild(loadedImage.target);
			heroImageSection.appendChild(anchor);
		});
	});
}

function renderHomeHeroPages() {
	const heroPages = document.getElementById("heroPages");
	heroPages.innerHTML = `<div id="heroImage"><div class="loaderImg mx-auto"></div></div>`;

	requestComponent((returnedData) => {
		HeroPageSectionComponent(returnedData.HomeHeroPages);
	}, "components/heroPage/homeHeroPages");
}
