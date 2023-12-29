const GroupMenuMappingViewModel = require("../models/GroupMenuMappingViewModel");
const { getHTML } = require("../utils/commonUtils");

// const findAll = async (groupMenuName) => {
// 	try {
// 		let result;
// 		if (groupMenuName) {
// 			result = await GroupMenuMappingViewModel.findAll({
// 				where: {
// 					["groupMenuName"]: groupMenuName,
// 				},
// 				order: [["pos", "ASC"]],
// 			});
// 		} else {
// 			result = await GroupMenuMappingViewModel.findAll();
// 		}
// 		return getJsonFormatted(result);
// 	} catch (error) {
// 		console.log(error);
// 		throw new Error("Error fetching All GroupMenuMappingViewModel");
// 	}
// };

const findAll = async (filterClause) => {
	try {
		let result;
		if (filterClause) {			
			result = await GroupMenuMappingViewModel.findAll(filterClause);			
		} else {			
			result = await GroupMenuMappingViewModel.findAll();
		}
		return getJsonFormatted(result);
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching All GroupMenuMappingViewModel");
	}
};

const getJsonFormatted = (data) => {
	let resultJSON = {};

	data.map((groupMenu) => {
		let contentItem = {
			menuName: getHTML(groupMenu.menuName, true),
			groupMenuDisplayName: getHTML(groupMenu.groupMenuDisplayName, true),
			menuHref: getHTML(groupMenu.menuHref, true),
			pos: groupMenu.pos,
		};

		if (Array.isArray(resultJSON[groupMenu.groupMenuName])) {
			resultJSON[groupMenu.groupMenuName].push(contentItem);
		} else {
			resultJSON[groupMenu.groupMenuName] = [];
			resultJSON[groupMenu.groupMenuName].push(contentItem);
		}
	});

	return resultJSON;
};

/*
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
				contentHeading: getHTML(section.contentHeading, true),
				contentSubHeading: getHTML(section.contentSubHeading),
				contentParagraph: getHTML(section.contentParagraph),
				contentFootNote: getHTML(section.contentFootNote),
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
		throw new Error("Error fetching with filter SectionContentMappingView");
	}
};
*/
// Service function to create a new promotion

module.exports = {
	findAll,
	getJsonFormatted,
};
