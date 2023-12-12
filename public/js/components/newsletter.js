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
				console.log("Email sent successfully!");
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

function NewsLetterSectionComponent() {
	return [
		`<div class="flex flex-col gap-4 bg-slate-100 py-20 my-12 px-4 lg:px-20">`,
		` <div class="flex flex-col lg:items-center space-y-2">`,
		`   <h4 class="underline text-link">Join our newsletter</h4>`,
		`   <p class="text-gray-600">Subscribe to our weekly Newsletter.</p>`,
		` </div>`,
		` <div class="flex flex-col gap-2 lg:items-center">`,
		`   <div class="flex flex-col md:flex-row gap-2 lg:w-1/2">`,
		`     <input id="emailAddressSubscription" type="email" maxlength="128" placeholder="Email Address. e.g: example@mail.com" class="text-sm w-full lg:w-3/4 p-2 h-1/2 border border-gray-300 focus:outline-none placeholder:text-sm placeholder:text-slate-400 rounded-md" />`,
		`     <button id="submitSubscribeBtn" class="tombol-block md:tombol">Subscribe</button>`,
		`   </div>`,
		`   <p id="subscribeResponseMessage" class="subtext-info triple-blink">Provide your email address to subscribe. For e.g example@email.com</p>`,
		` </div>`,
		`</div>`,
	].join("");
}

function renderJoinNewsLetter() {
	const newsletter = document.getElementById("newsletter");
	newsletter.innerHTML = NewsLetterSectionComponent();
	handleSubmitSubscribe();
}
