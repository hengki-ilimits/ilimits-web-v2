const path = require("path");
const SiteMenuService = require("../services/siteMenuService");
const {
	convertMarkdownValuesToHTML,
	groupByParameterIntoArray,
	groupByParameterFlat,
	groupByParameterToArrayOfObjects,
} = require("../utils/commonUtils");

const fetchAll = async (req, res) => {
	try {
		const siteMenu = await SiteMenuService.findAll();
		const htmlContent = convertMarkdownValuesToHTML(siteMenu);
		res.status(200).json(htmlContent);
	} catch (error) {
		console.error("Error fetching site menu:", error);
		res.status(500).json({ error: "An error occurred while fetching site menu." });
	}
};

module.exports = { fetchAll };
