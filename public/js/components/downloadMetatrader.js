function renderDownloadMetatrader() {
	const downloadMetatrader = document.getElementById("downloadMetatrader");
	downloadMetatrader.innerHTML = SectionPlaceholderComponent();

	requestComponent((returnedData) => {
		function composeComponent(metatraderData) {
			const metatraderComponent = [`<div class="flex flex-col items-center md:flex-row gap-8">`];
			metatraderData.map((item) => {
				metatraderComponent.push(
					[
						`<div class="flex flex-col w-full md:w-3/4">`,
						`	<h2 class="mb-2 font-semibold text-center md:text-start">${item.contentHeading}</h2>`,
						`	<p class="mb-8 text-center md:text-start">${item.contentParagraph}</p>`,
						`	<a href="${item.contentButtonHref}" target="_blank" class="tombol-block md:tombol-lg">${item.contentButtonLabel}</a>`,
						`</div>`,
					].join("")
				);

				metatraderComponent.push(
					[
						`<div id="${item.contentImageId}" class="mx-auto"><div class="loaderImg"></div></div>`,
					].join("")
				);

				promiseLoadImage(item.defaultEndPoint + item.contentImageId, ["w-40", "md:w-60"]).then(
					(loadedImage) => {
						const figure = document.getElementById(item.contentImageId);
						const loader = figure.querySelector("div");
						figure.removeChild(loader);

						const anchor = document.createElement("a");
						anchor.href = item.contentImageHref;
						anchor.target = "_blank";

						anchor.appendChild(loadedImage.target);

						figure.appendChild(anchor);
					}
				);
			});

			return metatraderComponent.join("");
		}

		promiseRender(() => composeComponent(returnedData.downloadMetatrader))
			.then((result) => {
				const downloadMetatrader = document.getElementById("downloadMetatrader");
				downloadMetatrader.innerHTML = result;
			})
			.catch((error) => {
				const downloadMetatrader = document.getElementById("downloadMetatrader");
				downloadMetatrader.innerHTML = error;
			});
	}, "components/downloadPlatform");
}
