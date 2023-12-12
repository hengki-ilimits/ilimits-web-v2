const path = require("path");
const sectionContentService = require("../services/sectionContentService");
const { convertMarkdownValuesToHTML } = require("../utils/commonUtils");

const fetchAll = async (req, res) => {
	try {
		const sectionContent = await sectionContentService.findAll();
		// const htmlContent = convertMarkdownValuesToHTML(footer);
		res.status(200).json(sectionContent);
	} catch (error) {
		console.error("Error fetching Section Content:", error);
		res.status(500).json({ error: "An error occurred while Section Content." });
	}
};

module.exports = { fetchAll };
