const { marked } = require("marked");

function convertMarkdownToHTML(markdownText) {
	return marked(markdownText);
}

function replaceNWithBreaks(text) {
	return text.replace(/<n>/g, "<br/><br/>");
}

function removePTags(htmlString) {
	return htmlString.replace(/<\/?p>/g, "");
}

function convertMarkdownValuesToHTML(jsonData) {
	marked.use({
		breaks: true,
		gfm: true,
	});

	const convertedJsonData = [];
	jsonData.map((item) => {
		for (const key in item) {
			if (Object.hasOwnProperty.call(item, key)) {
				const value = item[key];
				if (typeof value === "string" && key != "sectionId" && key != "groupName") {
					let newValue = marked.parse(value);
					item[key] = replaceNWithBreaks(newValue);
				}
			}
		}
		convertedJsonData.push(item);
	});
	return convertedJsonData;
}

function convertMarkdownValuesToHTML2(jsonData, columns) {
	const renderer = new marked.Renderer();
	renderer.link = function (href, title, text) {
		return `<a href="${href}" target="_blank" title="${title || ""}">${text}</a>`;
	};

	marked.use({
		breaks: true,
		gfm: true,
	});
	const convertedJsonData = [];
	jsonData.map((item) => {
		for (const key in item) {
			if (Object.hasOwnProperty.call(item, key)) {
				const value = item[key];
				if (typeof value === "string" && columns.includes(key)) {
					let newValue = marked.parse(value, { renderer });
					let cleanedContent = removePTags(newValue);
					item[key] = replaceNWithBreaks(cleanedContent);
				}
			}
		}
		convertedJsonData.push(item);
	});
	return convertedJsonData;
}

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

function groupByParameterFlat(data, parameter) {
	const groupedData = {};

	data.forEach((item) => {
		const groupKey = item[parameter];
		if (!groupedData[groupKey]) {
			groupedData[groupKey] = [];
		}
		groupedData[groupKey].push(item);
	});

	return Object.keys(groupedData).reduce((result, key) => {
		result.push(...groupedData[key]);
		return result;
	}, []);
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

function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

	return emailRegex.test(email) && email.length <= 128;
}

module.exports = {
	convertMarkdownValuesToHTML,
	convertMarkdownToHTML,
	groupByParameterIntoArray,
	groupByParameterFlat,
	groupByParameterToArrayOfObjects,
	validateEmail,
	convertMarkdownValuesToHTML2,
};
