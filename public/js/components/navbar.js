function renderLogo() {
	const logoSource = {
		id: "logo1",
		alt: "iLimits Logo",
		imageSource: "logo.svg",
		href: "#",
	};

	return [
		`<div><a href="${logoSource.href}"><img src="assets/img/${logoSource.imageSource}" /></a></div>`,
	].join("");
}

function renderButton(buttonLabel) {
	const btn = [
		`<button class="hover:bg-baseOrange text-gray-700 border border-gray-300 font-semibold rounded-lg px-4 h-8">`,
		`${buttonLabel}`,
		`</button>`,
	];
	return btn.join("");

	<button class="bg-baseGreen hover:bg-baseOrange text-white font-semibold rounded-lg px-4 h-8">
		Register Now
	</button>;
}

function renderNavBar() {
	const logo = renderLogo();

	const container = [`<div class="w-full h-20 py-4 px-8 flex justify-between">`];

	container.push(logo);

	container.push(`</div>`);

	<div class="w-full h-20 py-4 px-8 flex justify-between">
		<div class="flex items-center gap-4">
			<div class="dropdown">
				<label tabindex="0">
					<div class="w-12 hover:bg-baseOrange cursor-pointer h-8 flex justify-center items-center rounded-lg">
						<img
							src="assets/img/icons/flag-language-circle/flag-united-kingdom.png"
							class="h-1/2"
						/>
					</div>
				</label>
				<ul
					tabindex="0"
					class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
					<li class="hover:bg-baseGreen rounded-md">
						<a>
							<div class="w-12 h-8 flex justify-center items-center rounded-lg">
								<img
									src="assets/img/icons/flag-language-circle/flag-united-kingdom.png"
									class="h-1/2"
								/>
							</div>
							English
						</a>
					</li>
					<li class="hover:bg-baseGreen rounded-md">
						<a>
							<div class="w-12 h-8 flex justify-center items-center rounded-lg">
								<img src="assets/img/icons/flag-language-circle/flag-indonesia.png" class="h-1/2" />
							</div>
							Indonesia
						</a>
					</li>
					<li class="hover:bg-baseGreen rounded-md">
						<a>
							<div class="w-12 h-8 flex justify-center items-center rounded-lg">
								<img src="assets/img/icons/flag-language-circle/flag-malaysia.png" class="h-1/2" />
							</div>
							Malaysia
						</a>
					</li>
				</ul>
			</div>
			<button class="hover:bg-baseOrange text-gray-700 border border-gray-300 font-semibold rounded-lg px-4 h-8">
				Login
			</button>
			<button class="bg-baseGreen hover:bg-baseOrange text-white font-semibold rounded-lg px-4 h-8">
				Register Now
			</button>
			<span class="cursor-pointer material-symbols-outlined"> menu </span>
		</div>
	</div>;
}

document.addEventListener("DOMContentLoaded", () => {
	const navbar = document.getElementById("navbar");
	navbar.innerHTML = renderNavBar();
});
