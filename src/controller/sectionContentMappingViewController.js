const sectionContentMappingViewService = require("../services/sectionContentMappingViewService");

// const fetchAll = async (req, res) => {
// 	try {
// 		let sectionName = req.params.sectionName;
// 		let contentData;
// 		if (sectionName) {
// 			contentData = await sectionContentMappingViewService.findBySectionNameInJson(sectionName);
// 		} else {
// 			contentData = await sectionContentMappingViewService.findAllInJson();
// 		}
// 		res.status(200).json(contentData);
// 	} catch (error) {
// 		console.error("Error fetching sectionContentMappingView:", error);
// 		res
// 			.status(500)
// 			.json({ error: "An error occurred while fetching Section Content Mapping View." });
// 	}
// };

const fetchAll = async (req, res) => {
	try {
		let sectionName = req.params.sectionName;
		let contentData;
		if (sectionName) {
			contentData = await sectionContentMappingViewService.findAll(sectionName);

			const composedComponent = [];

			composedComponent.push(Footer(contentData.Footer));

			res.send(composedComponent.join(""));
			
		} else {
			contentData = await sectionContentMappingViewService.findAllInJson();
			res.status(200).json(contentData);
		}
	} catch (error) {
		console.error("Error fetching sectionContentMappingView:", error);
		res
			.status(500)
			.json({ error: "An error occurred while fetching Section Content Mapping View." });
	}
};

module.exports = { fetchAll };
