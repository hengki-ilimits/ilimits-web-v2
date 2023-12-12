const SocialMediaModel = require("../models/socialMediaModel.js");
const fs = require("fs");

// Service function to retrieve all promotions
const findAll = async () => {
	try {
		return await SocialMediaModel.findAll();
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching SocialMediaModel");
	}
};

// Service function to create a new promotion

module.exports = {
	findAll,
};
