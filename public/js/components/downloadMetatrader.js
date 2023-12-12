function DownloadMetatraderSectionComponent(contentData) {
	const { heading, textContent, buttonLabel } = contentData;

	const container = [`<div class="flex flex-col items-center md:flex-row">`];

	const downloadMetatraderComponent = [
		`<div class="flex flex-col md:w-1/2 lg:w-3/4">`,
		`   <h2 class="mb-2 font-semibold text-center md:text-start">${heading}</h2>`,
		`   <p class="mb-8 text-center md:text-start">${textContent}</p>`,
		`   ${addCssClassToHtmlTag(buttonLabel, "a", "tombol-block md:tombol-lg self-end")}`,
		`</div>`,
		`<div class="mx-auto">`,
		`	<img src="${IMAGE_BASE_URL}phone_14_no_bg.png" />`,
		`</div>`,
	].join("");

	container.push(downloadMetatraderComponent);
	container.push(`</div>`);

	return container.join("");
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
				// callback(items);
			} else {
				throw new Error("Something went wrong");
			}
		})
		.catch((error) => {
			console.error(`Error fetching and rendering ${endPoint}:, ${error}`);
			// callback();
		});
}

function renderDownloadMetatrader() {
	const downloadMetatrader = document.getElementById("downloadMetatrader");

	fetchData((data) => {
		downloadMetatrader.innerHTML = DownloadMetatraderSectionComponent(data[0]);
	}, "downloadMetatrader");
}
