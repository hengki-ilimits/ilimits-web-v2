const PromotionOverviewView = require("../models/PromotionOverviewView");

// Service function to retrieve all promotions
const findAllView = async () => {
	try {
		return await PromotionOverviewView.findAll();
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching footer");
	}
};

const findDetailById = async (id) => {
	try {
		return await PromotionOverviewView.findByPk(id);
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching promotion");
	}
};

const findAllViewByFilter = async (columns, size) => {
	try {
		return await PromotionOverviewView.findAll({
			attributes: columns, // Specify the columns to retrieve
			limit: size, // Limit the number of rows returned
		});
	} catch (error) {
		throw new Error("Error Fetching PromotionView:" + error);
	}
};

// Service function to create a new promotion

const findAll = async (startIndex) => {
	const limitCount = 5;
	try {
		const result = await PromotionOverviewView.findAll({
			limit: limitCount,
			offset: parseInt(startIndex),
		});

		const promotionOverview = [];

		result.map((item) => {
			promotionOverview.push({
				id: item.id,
				imageId: item.imageId,
				imageFileName: item.imageFileName,
				title: item.title,
				subTitle: item.subTitle,
				footNote: item.footNote,
				href: item.href,
			});
		});

		// return promotionOverview;
		return [];
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching with filter PromotionOverviewView");
	}
};

const findById = async (contentId) => {
	try {
		const result = await PromotionOverviewView.findByPk(contentId);

		if (result.dataValues.imageId) {
			result.dataValues.defaultEndPoint = process.env.DEFAULT_IMAGE_END_POINT;
		}

		return result;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching with filter PromotionOverviewView");
	}
};

module.exports = {
	findAllView,
	findDetailById,
	findAllViewByFilter,
	findAll,
	findById,
};
