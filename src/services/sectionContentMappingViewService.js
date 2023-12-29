const SectionContentMappingView = require("../models/SectionContentMappingView");
const { getHTML } = require("../utils/commonUtils");
const dotenv = require("dotenv");

// Service function to retrieve all promotions
const findAllInJson = async () => {
	try {
		const result = await SectionContentMappingView.findAll();

		let resultJSON = {};
		let tempObject = {};

		result.map((section) => {
			let contentItem = {
				contentHeading: getHTML(section.contentHeading, true),
				contentSubHeading: getHTML(section.contentSubHeading),
				contentParagraph: getHTML(section.contentParagraph),
				contentFootNote: getHTML(section.contentFootNote),
				contentButtonLabel: section.contentButtonLabel,
				contentButtonHref: section.contentButtonHref,
			};

			if (Array.isArray(tempObject[section.elementId])) {
				tempObject[section.elementId].push(contentItem);
			} else {
				tempObject[section.elementId] = [];
				tempObject[section.elementId].push(contentItem);
			}

			resultJSON[section.sectionName] = tempObject;
		});

		return resultJSON;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching All SectionContentMappingView");
	}
};

const findBySectionNameInJson = async (sectionName) => {
	try {
		const result = await SectionContentMappingView.findAll({
			where: {
				["sectionName"]: sectionName,
			},
		});

		let resultJSON = {};
		let tempObject = {};

		result.map((section) => {
			let contentItem = {
				contentHeading: section.contentHeading,
				contentSubHeading: section.contentSubHeading,
				contentParagraph: section.contentParagraph,
				contentFootNote: section.contentFootNote,
			};

			if (section.contentButtonLabel) {
				contentItem.contentButtonLabel = section.contentButtonLabel;
			}

			if (section.contentButtonHref) {
				contentItem.contentButtonHref = section.contentButtonHref;
			}

			if (section.contentImageId) {
				contentItem.contentImageId = process.env.DEFAULT_IMAGE_END_POINT + section.contentImageId;
			}

			if (section.contentImageHref) {
				contentItem.contentImageHref = section.contentImageHref;
			}

			if (Array.isArray(tempObject[section.elementId])) {
				tempObject[section.elementId].push(contentItem);
			} else {
				tempObject[section.elementId] = [];
				tempObject[section.elementId].push(contentItem);
			}

			resultJSON[section.sectionName] = tempObject;
		});

		return resultJSON;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching with filter SectionContentMappingView");
	}
};

const findAll = async (sectionName) => {
	try {
		const result = await SectionContentMappingView.findAll({
			where: {
				["sectionName"]: sectionName,
			},
		});

		let resultJSON = {};
		let tempObject = {};

		result.map((section) => {
			let contentItem = {
				contentHeading: section.contentHeading,
				contentSubHeading: section.contentSubHeading,
				contentParagraph: section.contentParagraph,
				contentFootNote: section.contentFootNote,
			};

			if (section.contentButtonLabel) {
				contentItem.contentButtonLabel = section.contentButtonLabel;
			}

			if (section.contentButtonHref) {
				contentItem.contentButtonHref = section.contentButtonHref;
			}

			if (section.contentImageId) {
				contentItem.defaultEndPoint = process.env.DEFAULT_IMAGE_END_POINT;
				contentItem.contentImageId = section.contentImageId;
			}

			if (section.contentImageHref) {
				contentItem.contentImageHref = section.contentImageHref;
			}

			if (Array.isArray(tempObject[section.elementId])) {
				tempObject[section.elementId].push(contentItem);
			} else {
				tempObject[section.elementId] = [];
				tempObject[section.elementId].push(contentItem);
			}

			resultJSON[section.sectionName] = tempObject;
		});

		return resultJSON;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching with filter SectionContentMappingView");
	}
};

// Service function to create a new promotion

module.exports = {
	findAllInJson,
	findBySectionNameInJson,
	findAll,
};
