const SocialMediaModel = require("../models/SocialMediaModel");

// Service function to retrieve all promotions
const findAll = async () => {
	try {
		return await SocialMediaModel.findAll();
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching All SocialMediaModel");
	}
};

module.exports = {
	findAll,
};
