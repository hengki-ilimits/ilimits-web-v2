const sectionContentMappingViewService = require("../services/sectionContentMappingViewService");

const fetchAll = async (req, res) => {
	try {
		let downloadPlatformData = await sectionContentMappingViewService.findAll("DownloadMetatrader");

		const platform = downloadPlatformData.DownloadMetatrader;

		res.status(200).json(platform);
	} catch (error) {
		console.error("Error fetching Platform Data:", error);
		res.status(500).json({ error: "An error occurred while fetching Platform Data." });
	}
};

module.exports = { fetchAll };
