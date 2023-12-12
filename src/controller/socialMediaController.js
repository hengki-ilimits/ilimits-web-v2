const path = require("path");
const socialMediaService = require("../services/socialMediaService");
const { convertMarkdownValuesToHTML } = require("../utils/commonUtils");

const fetchAll = async (req, res) => {
	try {
		const socialMedia = await socialMediaService.findAll();
		// const htmlContent = convertMarkdownValuesToHTML(socialMedia);
		res.status(200).json(socialMedia);
	} catch (error) {
		console.error("Error fetching footer:", error);
		res.status(500).json({ error: "An error occurred while fetching footer." });
	}
};

module.exports = { fetchAll };
