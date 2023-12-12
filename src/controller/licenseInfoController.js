const path = require("path");
const licenseInfoService = require("../services/licenseInfoService");
const { convertMarkdownValuesToHTML } = require("../utils/commonUtils");

const fetchAll = async (req, res) => {
	try {
		const licenseInfo = await licenseInfoService.findAll();
		const htmlContent = convertMarkdownValuesToHTML(licenseInfo);
		res.status(200).json(htmlContent);
	} catch (error) {
		console.error("Error fetching License Info:", error);
		res.status(500).json({ error: "An error occurred while fetching License Info." });
	}
};

module.exports = { fetchAll };
