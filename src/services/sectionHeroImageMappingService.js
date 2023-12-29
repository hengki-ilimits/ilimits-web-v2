const SectionHeroImageMappingViewModel = require("../models/SectionHeroImageMappingViewModel");
const dotenv = require("dotenv");

const findAll = async (sectionName) => {
	try {
		const result = await SectionHeroImageMappingViewModel.findAll({
			where: {
				["sectionName"]: sectionName,
			},
		});

		let resultJSON = {};
		let tempObject = {};

		result.map((section) => {
			let contentItem = {
				id: section.id,
				// imageId: section.imageId,
				imageHeroHref: section.imageHeroHref,
				sectionId: section.sectionId,
				sectionName: section.sectionName,
			};

			// 	if (section.contentButtonLabel) {
			// 		contentItem.contentButtonLabel = section.contentButtonLabel;
			// 	}

			// 	if (section.contentButtonHref) {
			// 		contentItem.contentButtonHref = section.contentButtonHref;
			// 	}

			if (section.imageId) {
				contentItem.defaultEndPoint = process.env.DEFAULT_IMAGE_END_POINT;
				contentItem.imageId = section.imageId;
			}

			// 	if (section.contentImageHref) {
			// 		contentItem.contentImageHref = section.contentImageHref;
			// 	}

			if (Array.isArray(tempObject[section.sectionName])) {
				tempObject[section.sectionName].push(contentItem);
			} else {
				tempObject[section.sectionName] = [];
				tempObject[section.sectionName].push(contentItem);
			}

			resultJSON[section.sectionName] = tempObject;
		});

		return resultJSON;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching with filter SectionContentMappingView");
	}
};

module.exports = {
	findAll,
};
