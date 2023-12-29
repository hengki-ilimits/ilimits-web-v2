const promotionOverviewService = require("../services/promotionOverviewService");

const fetchView = async (req, res) => {
	try {
		let pk = req.params.id;
		let rows;
		let contentData;
		if (pk) {
			rows = await promotionOverviewService.findDetailById(pk);

			const { id, title, subTitle, footNote, imageData, imageContentType, textContent } =
				rows.dataValues;

			const imageRef = Buffer.from(imageData, "binary").toString("base64");

			contentData = {
				id,
				title,
				subTitle,
				footNote,
				imageRef,
				imageContentType,
				textContent,
			};
			res.status(200).json([contentData]);
		} else {
			rows = await promotionOverviewService.findAllViewByFilter([]);

			contentData = rows.map((row) => {
				const {
					id,
					title,
					subTitle,
					footNote,
					href,
					contentStatus,
					imageFileName,
					// imageData,
					imageContentType,
				} = row.dataValues;

				// const imageRef = Buffer.from(imageData, "binary").toString("base64");
				return {
					id,
					title,
					subTitle,
					footNote,
					href,
					contentStatus,
					imageFileName,
					// imageRef,
					imageContentType,
				};
			});
			res.status(200).json(contentData);
		}
	} catch (error) {
		console.error("Error fetching footer:", error);
		res.status(500).json({ error: "An error occurred while fetching footer." });
	}
};

const findDetailById = async (req, res) => {
	try {
		let id = req.params.id;

		let redirectPage = "/promotions/detail.html?detail=" + id;

		res.redirect(redirectPage);
	} catch (error) {
		console.error("Error redirecting:", error);
		res.redirect("/index.html");
	}
};

const fetchViewByFilter = async (req, res) => {
	const columns = ["id", "title", "subTitle", "footNote", "href", "imageId"];
	try {
		let pk = req.params.id;
		if (pk) {
			const row = await promotionOverviewService.findDetailById(pk);
			const { id, title, subTitle, footNote, imageId, textContent } = row.dataValues;

			res.status(200).json({
				id,
				title,
				subTitle,
				footNote,
				textContent,
				imageId,
			});
		} else {
			const rows = await promotionOverviewService.findAllViewByFilter(columns, 10);

			contentData = rows.map((row) => {
				const { id, title, subTitle, footNote, href, imageId } = row.dataValues;

				// const imageRef = Buffer.from(imageData, "binary").toString("base64");
				return {
					id,
					title,
					subTitle,
					footNote,
					href,
					imageId,
				};
			});
			res.status(200).json(contentData);
		}
	} catch (error) {
		console.error("Error fetching footer:", error);
		res.status(500).json({ error: "An error occurred while fetching footer." });
	}
};

const fetchAll = async (req, res) => {
	try {
		let startIndex = req.params.startIndex;

		if (!startIndex) {
			startIndex = 0;
		}

		let promotionView = await promotionOverviewService.findAll(startIndex);

		res.status(200).json(promotionView);
	} catch (error) {
		console.error("Error fetching footer:", error);
		res.status(500).json({ error: "An error occurred while fetching footer." });
	}
};

const fetchById = async (req, res) => {
	try {
		const contentId = req.params.contentId;

		let promotionDetail = [];
		if (contentId) {
			promotionDetail = await promotionOverviewService.findById(contentId);
		}

		res.status(200).json(promotionDetail);
	} catch (error) {
		console.error("Error fetching footer:", error);
		res.status(500).json({ error: "An error occurred while fetching footer." });
	}
};

// module.exports = { fetchView, findDetailById, fetchViewByFilter, fetchAll };
module.exports = { fetchAll, fetchById };
