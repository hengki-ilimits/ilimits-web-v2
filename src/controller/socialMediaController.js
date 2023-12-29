const socialMediaService = require("../services/socialMediaService");

const fetchAll = async (req, res) => {
	try {
		const contentData = await socialMediaService.findAll();
		res.status(200).json(contentData);
	} catch (error) {
		console.error("Error fetching socialMediaService:", error);
		res.status(500).json({ error: "An error occurred while fetching Social Media." });
	}
};

module.exports = { fetchAll };
