// ===FETCHING
function postData(emailAddress, callback, endPoint) {
	fetch(`/api/add/${endPoint}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json", // Set the content type to JSON
		},
		body: JSON.stringify({ email: emailAddress }),
	})
		.then((response) => {
			if (response.ok) {
				callback(true);
				// Additional actions if needed upon successful email submission
			} else {
				callback(false);
				console.error("Failed to send email.");
				// Handle error if needed
			}
		})
		.catch((error) => {
			callback(false);
			console.error("Error:", error);
			// Handle network errors or exceptions
		});
}

function handleSubmitSubscribe() {
	const submitSubscribeBtn = document.getElementById("submitSubscribeBtn");
	const subscribeResponseMessage = document.getElementById("subscribeResponseMessage");
	const emailAddressSubscription = document.getElementById("emailAddressSubscription");

	submitSubscribeBtn.addEventListener("click", () => {
		const emailAddress = emailAddressSubscription.value;

		if (validateEmail(emailAddress)) {
			submitSubscribeBtn.innerText = "";
			submitSubscribeBtn.innerHTML = `<div id="submitSubscribeBtnLoader" class="loader3"></div>`;

			postData(
				emailAddress,
				(isSuccess) => {
					setTimeout(function () {
						submitSubscribeBtn.innerText = "Subscribe";

						if (isSuccess) {
							subscribeResponseMessage.innerText =
								"Welcome aboard! You've successfully subscribed to our newsletter";
							replaceClass(subscribeResponseMessage, "subtext-info", "subtext-success");
							replaceClass(subscribeResponseMessage, "subtext-danger", "subtext-success");
						} else {
							subscribeResponseMessage.innerText =
								"Failed to subscribe your email. Please try again later";
							replaceClass(subscribeResponseMessage, "subtext-info", "subtext-danger");
						}
						subscribeResponseMessage.style.animation = "none";
						void subscribeResponseMessage.offsetWidth;
						emailAddressSubscription.value = "";
					}, 500);
				},
				"subscribeEmail"
			);
		} else {
			subscribeResponseMessage.innerText =
				"Invalid Email Address! Provide your email address to subscribe. For example@email.com";
			replaceClass(subscribeResponseMessage, "subtext-info", "subtext-danger");
			subscribeResponseMessage.style.animation = "none";
			void subscribeResponseMessage.offsetWidth;
			subscribeResponseMessage.style.animation = "blink 1.5s 1";
		}
	});
}

function fetchDataPromotion(callback, endPoint) {
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
			if (error.name === "AbortError") {
				throw new Error("Request timed out");
			}
			console.error(`Error fetching and rendering Promotion Overview:, ${error}`);
		});
}

const loaderId = [];

function CardItemSectionComponent(contentData) {
	const container = [];

	contentData.forEach((data) => {
		const cardItem = [
			`<a href="${data.href}/${data.id}" class="card card-compact cardItem bg-base-100 shadow-xl">`,
			`	<figure id="${data.imageId}">`,
			`		<div class="loaderImg my-20"></div>`,
			`	</figure>`,
			`	<div class="card-body">`,
			`		<h2 class="card-title font-bold">${data.title}</h2>`,
			`		<h4>${data.subTitle}</h4>`,
			`		<div class="card-actions justify-end">`,
			`			<h6>${data.footNote}</h6>`,
			`		</div>`,
			`	</div>`,
			`</a>`,
		].join("");
		loaderId.push(data.imageId);
		container.push(cardItem);
	});

	return container.join("");
}

function loadImage(imageId) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.att;
		img.onload = resolve;
		img.onerror = reject;
		img.src = "/api/image/" + imageId;
	});
}

function renderPromotionOverview() {
	const thumbnailContainer = document.getElementById("thumbnailContainer");

	fetchDataPromotion((contentData) => {
		thumbnailContainer.innerHTML = CardItemSectionComponent(contentData);

		loaderId.map((imageId) => {
			loadImage(imageId).then((loadedImage) => {
				const figure = document.getElementById(imageId);
				const loader = figure.querySelector("div");
				figure.removeChild(loader);
				figure.appendChild(loadedImage.target);
			});
		});
	}, "promotionOverview/0");
}
