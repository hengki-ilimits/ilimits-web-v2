const groupMenuMappingViewService = require("../services/groupMenuMappingViewService");
const { Op } = require("sequelize");

const fetchAll = async (req, res) => {
	try {
		let groupMenuMapping;
		const filterClause = {
			where: {
				groupMenuName: {
					[Op.in]: ["navBar", "memberAreaButton", "language"], // Users in the specified departments
				},
			},
			order: [
				["groupMenuName", "ASC"],
				["pos", "ASC"],
			],
		};
		groupMenuMapping = await groupMenuMappingViewService.findAll(filterClause);

		res.status(200).json(groupMenuMapping);
	} catch (error) {
		console.error("Error fetching Navbar:", error);
		res.status(500).json({ error: "An error occurred while fetching navbar." });
	}
};

module.exports = { fetchAll };
