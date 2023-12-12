const LicenceInfoModel = require("../models/licenseInfoModel");
const fs = require("fs");

// Service function to retrieve all promotions
const findAll = async () => {
	try {
		return await LicenceInfoModel.findAll();
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching footer");
	}
};

// Service function to create a new promotion

module.exports = {
	findAll,
};
