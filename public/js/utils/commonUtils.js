//Multi language
let languageOption = ["en", "id", "my"];

function initSelectedLanguage() {
	const selectedLanguage = localStorage.getItem("selectedLanguage");
	const optionLanguageMode = ["optionLanguagesMobile", "optionLanguages"];
	optionLanguageMode.map((item) => {
		const children = document.getElementById(item).children;
		for (let i = 0; i < children.length; i++) {
			children[i].classList.remove("drawerSelected");
			if (children[i].lang == selectedLanguage) {
				children[i].classList.add("drawerSelected");
			}
		}
	});
}

function handleSelectedLanguage(event) {
	const clicked = event.target.closest("li");
	if (clicked) {
		const selectedLanguage = clicked.lang;
		localStorage.setItem("selectedLanguage", "en");
		if (languageOption.includes(selectedLanguage)) {
			localStorage.setItem("selectedLanguage", selectedLanguage);
		}
		initSelectedLanguage();
	}
}

function handleChangeLanguage() {
	initSelectedLanguage();
	const optionLanguages = document.getElementById("optionLanguages");
	optionLanguages.addEventListener("click", handleSelectedLanguage);

	const optionLanguagesMobile = document.getElementById("optionLanguagesMobile");
	optionLanguagesMobile.addEventListener("click", handleSelectedLanguage);
}
//END Multi language

//Drawer
function handleDrawer() {
	const closeDrawer = document.getElementById("closeDrawer");
	const openDrawer = document.getElementById("openDrawer");

	const drawer = document.getElementById("drawer");
	closeDrawer.addEventListener("click", () => {
		drawer.style.right = "-50rem";
		const myContainer = document.getElementById("myContainer");
		myContainer.classList.remove("border-r-2", "border-baseGreen");
	});
	openDrawer.addEventListener("click", () => {
		drawer.style.right = "0";
		const myContainer = document.getElementById("myContainer");
		myContainer.classList.add("border-r-2", "border-baseGreen");
	});
}
//## Drawer

function groupByParameterIntoArray(data, parameter) {
	const groupedData = {};

	data.forEach((item) => {
		const groupKey = item[parameter];
		if (!groupedData[groupKey]) {
			groupedData[groupKey] = [];
		}
		groupedData[groupKey].push(item);
	});

	return Object.values(groupedData);
}

function groupByParameterToArrayOfObjects(data, parameter) {
	const groupedData = {};

	data.forEach((item) => {
		const groupKey = item[parameter];
		if (!groupedData[groupKey]) {
			groupedData[groupKey] = [];
		}
		groupedData[groupKey].push(item);
	});

	return Object.keys(groupedData).map((key) => ({
		[parameter]: key,
		items: groupedData[key],
	}));
}

function addCssClassToHtmlTag(htmlTag, element, cssClass) {
	const tag = htmlTag.trim();
	const regex = new RegExp(`<${element}[^>]*>`);
	const match = tag.match(regex);

	if (match) {
		const startTag = match[0];
		const endTag = `</${element}>`;
		const classAttr = ` class="${cssClass}"`;

		const modifiedTag = startTag.includes('class="')
			? startTag.replace(/(class=")(.*?)(")/, `$1${cssClass} $2$3`)
			: `${startTag.slice(0, -1)}${classAttr}${startTag.slice(-1)}`;

		return tag.replace(startTag, modifiedTag);
	} else {
		return tag;
	}
}

function replaceClass(element, oldClass, newClass) {
	element.classList.remove(oldClass); // Remove the old class
	element.classList.add(newClass); // Add the new class
}

function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

	return emailRegex.test(email) && email.length <= 128;
}

function fetchData2(callback, endPoint) {
	fetch(`/api/${endPoint}`)
		.then((response) => {
			alert("RES");
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((items) => {
			alert("THEN");
			if (items.length > 0) {
				callback(items);
			} else {
				throw new Error("Something went wrong");
			}
		})
		.catch((error) => {
			console.error(`Error fetching and rendering ${endPoint}:, ${error}`);
			callback();
		});
}

function sendRequest(callback, endPoint) {
	fetch(`/api/${endPoint}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((items) => {
			if (items) {
				callback(items);
			} else {
				throw new Error("Data Not Available");
			}
		})
		.catch((error) => {
			console.error(`Error fetching and rendering:, ${error}`);
			callback();
		});
}

function requestComponent(callback, endPoint) {
	fetch(`/api/${endPoint}`)
		.then((response) => response.json())
		.then((items) => {
			if (items) {
				callback(items);
			} else {
				throw new Error("Data Not Available");
			}
		})
		.catch((error) => {
			console.error(`Error fetching and rendering:, ${error}`);
			callback(ErrorReloadComponent());
		});
}

function promiseRender(renderFunction) {
	return new Promise((resolve, reject) => {
		try {
			const result = renderFunction();
			// throw new Error();
			resolve(result);
		} catch (error) {
			console.log(error);
			reject(ErrorReloadComponent());
			// reject(error);
		}
	});
}

function promiseLoadImage(imageId, classList) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.att;
		img.onload = resolve;
		img.onerror = reject;
		img.src = imageId;
		if (classList) {
			classList.map((className) => {
				img.classList.add(className);
			});
		}
	});
}

function ErrorReloadComponent() {
	return [
		`<a href="#" onclick="window.location.reload();" class="flex flex-col mx-auto hover:underline items-center py-12">`,
		`<h4 class="bi bi-arrow-clockwise mr-2"></h4>`,
		`<p>Failed to load content!</p>`,
		`</a>`,
	].join("");
}

//only for one level object(not sub key)
function composeComponent(contentData) {
	const contentDataComponent = [];
	contentData.map((item) => {
		Object.keys(item).forEach((key) => {
			contentDataComponent.push(item[key]);
		});
	});
	return contentDataComponent.join("");
}

function SectionPlaceholderComponent() {
	return `<div class="flex"><div class="loader5 mx-auto"></div></div>`;
}
