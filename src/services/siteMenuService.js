const SiteMenuModel = require("../models/siteMenuModel");
const fs = require("fs");

// Service function to retrieve all promotions
const findAll = async () => {
	try {
		return await SiteMenuModel.findAll();
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching site menu");
	}
};

// Service function to create a new promotion

module.exports = {
	findAll,
};
