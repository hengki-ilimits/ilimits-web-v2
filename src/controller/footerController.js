const sectionContentMappingViewService = require("../services/sectionContentMappingViewService");
const socialMediaService = require("../services/socialMediaService");
const groupMenuMappingViewService = require("../services/groupMenuMappingViewService");
const { Op } = require("sequelize");

const fetchAll = async (req, res) => {
	try {
		let footerContentData = await sectionContentMappingViewService.findAll("footer");

		let socialMediaContentData = await socialMediaService.findAll();
		footerContentData.Footer.socialMedia = [];
		socialMediaContentData.map((items) => {
			footerContentData.Footer.socialMedia.push({
				id: items.id,
				name: items.name,
				href: items.href,
			});
		});

		const clause = {
			where: {
				groupMenuName: {
					[Op.in]: ["trading", "aboutUs"], // Users in the specified departments
				},
			},
			order: [
				["groupMenuName", "ASC"],
				["pos", "ASC"],
			],
		};
		let footerSiteMenu = await groupMenuMappingViewService.findAll(clause);

		footerContentData.Footer.siteMenu = [];
		Object.keys(footerSiteMenu).forEach((key) => {
			const value = footerSiteMenu[key];

			const composeObject = {
				groupMenuName: key,
				menu: [],
			};

			for (let n = 0; n < value.length; n++) {
				composeObject.menu.push(value[n]);
			}

			footerContentData.Footer.siteMenu.push(composeObject);
		});

		res.status(200).json(footerContentData);
	} catch (error) {
		console.error("Error fetching footer:", error);
		res.status(500).json({ error: "An error occurred while fetching footer." });
	}
};

module.exports = { fetchAll };
