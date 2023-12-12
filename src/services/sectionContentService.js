const SectionContentModel = require("../models/sectionContentModel");

const findAll = async () => {
	try {
		return await SectionContentModel.findAll();
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching Section Data");
	}
};

module.exports = {
	findAll,
};
