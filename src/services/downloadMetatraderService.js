const DownloadMetatraderModel = require("../models/downloadMetatraderModel");

// Service function to retrieve all promotions
const findAll = async () => {
	try {
		return await DownloadMetatraderModel.findAll();
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching footer");
	}
};

// Service function to create a new promotion

module.exports = {
	findAll,
};
