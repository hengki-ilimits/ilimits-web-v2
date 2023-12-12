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
