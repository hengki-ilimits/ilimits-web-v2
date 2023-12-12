const path = require("path");
const footerService = require("../services/footerService");
const { convertMarkdownValuesToHTML } = require("../utils/commonUtils");

const fetchAll = async (req, res) => {
	try {
		const footer = await footerService.findAll();
		const htmlContent = convertMarkdownValuesToHTML(footer);
		res.status(200).json(htmlContent);
	} catch (error) {
		console.error("Error fetching footer:", error);
		res.status(500).json({ error: "An error occurred while fetching footer." });
	}
};

module.exports = { fetchAll };
