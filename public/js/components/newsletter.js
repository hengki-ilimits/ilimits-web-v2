function getNewsLetterSection() {
	return [
		`<div class="flex flex-col gap-4 bg-slate-100 py-20 my-12 px-4 lg:px-20">`,
		` <div class="flex flex-col lg:items-center space-y-2">`,
		`   <h4 class="underline text-link">Join our newsletter</h4>`,
		`   <p class="text-gray-600">Subscribe to our weekly Newsletter.</p>`,
		` </div>`,
		` <div class="flex flex-col gap-2 lg:items-center">`,
		`   <div class="flex flex-col lg:flex-row gap-2 lg:w-1/2">`,
		`     <input type="email" placeholder="Email" class="w-full lg:w-3/4 px-2 border border-gray-300" />`,
		`     <button class="btn-primary-block-xs lg:btn-primary-sm">Subscribe</button>`,
		`   </div>`,
		`   <p class="text-gray-600 text-xs">Provide your email address to subscribe. For e.g abc@xyz.com</p>`,
		` </div>`,
		`</div>`,
	].join("");
}

document.addEventListener("DOMContentLoaded", () => {
	const newsletter = document.getElementById("newsletter");
	newsletter.innerHTML = getNewsLetterSection();
});
