const path = require("path");
const downloadMetatraderService = require("../services/downloadMetatraderService");
const { convertMarkdownValuesToHTML2 } = require("../utils/commonUtils");

const fetchAll = async (req, res) => {
	try {
		const contentData = await downloadMetatraderService.findAll();

		const usersJSON = contentData.map((user) => user.get({ plain: true }));

		const htmlContent = convertMarkdownValuesToHTML2(usersJSON, ["buttonLabel"]);

		res.status(200).json(htmlContent);
	} catch (error) {
		console.error("Error fetching footer:", error);
		res.status(500).json({ error: "An error occurred while fetching footer." });
	}
};

module.exports = { fetchAll };
