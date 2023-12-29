// function handleChangeLanguage() {
// 	const optionLanguages = document.getElementById("optionLanguages");
// 	optionLanguages.addEventListener("click", function (event) {
// 		const clicked = event.target.closest("li");
// 		if (clicked) {
// 			const children = optionLanguages.children;
// 			for (let i = 0; i < children.length; i++) {
// 				children[i].classList.remove("selected");
// 			}

// 			clicked.classList.add("selected");
// 		}
// 	});
// }

// function loadImage(imageId) {
// 	return new Promise((resolve, reject) => {
// 		const img = new Image();
// 		img.att;
// 		img.onload = resolve;
// 		img.onerror = reject;
// 		img.src = "/api/image/" + imageId;
// 	});
// }

function fetchDetailPromotion(callback, endPoint) {
	fetch(`/api/${endPoint}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((items) => {
			if (items != undefined) {
				callback(items);
			} else {
				throw new Error("Something went wrong");
			}
		})
		.catch((error) => {
			if (error.name === "AbortError") {
				throw new Error("Request timed out");
			}
			console.error(`Error fetching and rendering Promotion Overview:, ${error}`);
		});
}

function PromotionDetailSectionComponent(contentData) {
	const { title, subTitle, footNote, textContent, imageId, imageContentType } = contentData;
	return [
		`<h1 class="pt-4 font-bold text-5xl">${title}</h1>`,
		`<h5 class="py-4 font-semibold">${footNote}</h5>`,
		// `<img src=data:${imageContentType};base64,${imageRef} alt="${title}" loading="lazy" />`,
		`<div id="${imageId}" class="loaderImg mx-auto w-full"></div>`,
		`<h2 class="pt-2 text-baseGreen font-semibold">${subTitle}</h2>`,
		`<h4 class="py-4">${textContent}</h4>`,
	].join("");
}

function renderDetailContent() {
	const params = new URLSearchParams(window.location.search);
	const detailId = params.get("content"); // Retrieves the value of 'param1'

	const promotionDetailContainer = document.getElementById("promotionDetailContainer");
	fetchDetailPromotion((contentData) => {
		promotionDetailContainer.innerHTML = PromotionDetailSectionComponent(contentData);

		console.log(contentData);

		promiseLoadImage(contentData.defaultEndPoint + contentData.imageId).then((loadedImage) => {
			const imageContainer = document.getElementById(contentData.imageId);
			const loader = imageContainer.classList.remove("loaderImg");
			imageContainer.appendChild(loadedImage.target);
		});
	}, "promotionOverview/detail/" + detailId);
}

function SectionPlaceholderComponent() {
	return [
		`<div id="promotionDetailContainer" class="promotionDetailContainer">`,
		`	<div class="loaderImg mx-auto"></div>`,
		`	<div class="loader5 mx-auto"></div>`,
		`</div>`,
	].join("");
}

document.addEventListener("DOMContentLoaded", () => {
	const promotionDetail = document.getElementById("promotionDetail");
	promotionDetail.innerHTML = SectionPlaceholderComponent();

	renderDetailContent();

	renderJoinNewsLetter();
	renderFooter();

	handleChangeLanguage();
	handleDrawer();
});
