const sectionHeroImageMappingService = require("../services/sectionHeroImageMappingService");

const fetchAll = async (req, res) => {
	try {
		let sectionName = req.params.sectionName;
		let contentData;
		if (sectionName) {
			contentData = await sectionHeroImageMappingService.findAll(sectionName);

			res.status(200).json(contentData);
		} else {
			// contentData = await sectionContentMappingViewService.findAllInJson();
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
