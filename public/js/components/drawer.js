function DefaultDrawer() {
	return [
		`<div class="flex flex-col px-4 w-full">`,
		`   <div class="flex items-center justify-between">`,
		`       <a href="/" class="h-full flex items-center py-4">`,
		`           <img src="/assets/img/logo.svg" class="h-full" />`,
		`       </a>`,
		`       <h1 id="closeDrawer" class="bi bi-x-lg cursor-pointer"></h1>`,
		`   </div>`,
		`   <div class="flex flex-row justify-between items-center space-x-2 pb-4">`,
		`       <a href="https://my.ilimitsinv.com/en/login" target="_blank" class="tombol-info-block">LOGIN</a>`,
		`       <a href="https://my.ilimitsinv.com/en/register" target="_blank" class="tombol-block">REGISTER NOW</a>`,
		`   </div>`,
		`   <a href="#" class="h-12 px-4 rounded-md drawerSelected cursor-pointer items-center flex font-semibold">Home</a>`,
		`   <a href="#" class="h-12 px-4 rounded-md drawerHover cursor-pointer items-center flex font-semibold">Trading</a>`,
		`   <a href="#" class="h-12 px-4 rounded-md drawerHover cursor-pointer items-center flex font-semibold">Investment</a>`,
		`   <a href="#" class="h-12 px-4 rounded-md drawerHover cursor-pointer items-center flex font-semibold">Platform</a>`,
		`   <a href="#" class="h-12 px-4 rounded-md drawerHover cursor-pointer items-center flex font-semibold">Promotion</a>`,
		`   <a href="#" class="h-12 px-4 rounded-md drawerHover cursor-pointer items-center flex font-semibold">About Us</a>`,
		`</div>`,
	].join("");
}

function renderDrawer() {
	const drawerSection = document.getElementById("drawer");
	drawerSection.innerHTML = DefaultDrawer();
}
