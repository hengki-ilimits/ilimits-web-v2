const path = require("path");
const groupMenuMappingViewService = require("../services/groupMenuMappingViewService");

const fetchAll = async (req, res) => {
	try {
		let groupMenuName = req.params.groupMenuName;

		let groupMenuMapping;

		if (groupMenuName) {
			const filterClause = {
				where: {
					["groupMenuName"]: groupMenuName,
				},
				order: [
					["groupMenuName", "ASC"],
					["pos", "ASC"],
				],
			};
			groupMenuMapping = await groupMenuMappingViewService.findAll(filterClause);
		} else {
			groupMenuMapping = await groupMenuMappingViewService.findAll();
		}

		res.status(200).json(groupMenuMapping);
	} catch (error) {
		console.error("Error fetching Group Menu Mapping View:", error);
		res.status(500).json({ error: "An error occurred while fetching Group Menu Mapping View." });
	}
};

module.exports = { fetchAll };
