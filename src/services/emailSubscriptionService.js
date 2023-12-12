const EmailSubscriptionModel = require("../models/emailSubscriptionModel");
const { validateEmail } = require("../utils/commonUtils");
const fs = require("fs");

const subscribeEmail = async (email) => {
	try {
		if (validateEmail(email)) {
			return await EmailSubscriptionModel.insertEmail(email);
		}
		throw new Error("Invalid email format");
	} catch (error) {
		throw error;
	}
};

module.exports = {
	subscribeEmail,
};
