const sectionContentMappingViewService = require("../services/sectionContentMappingViewService");

const fetchAll = async (req, res) => {
	try {
		let targetPage = req.params.targetPage;

		if (targetPage) {
			let featurePageData = await sectionContentMappingViewService.findAll(targetPage);

			const feature = featurePageData.HomeFeatures;

			res.status(200).json(feature);
		} else {
			throw new Error();
		}
	} catch (error) {
		console.error("Error fetching Platform Data:", error);
		res.status(500).json({ error: "An error occurred while fetching Platform Data." });
	}
};

module.exports = { fetchAll };
