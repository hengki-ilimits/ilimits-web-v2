const { generateTimestampBasedUUID } = require("../utils/uuid");

const get = async (req, res) => {
	try {
		const result = {
			uuid: generateTimestampBasedUUID(),
		};
		res.status(200).json(result);
	} catch (error) {
		console.error("Error generating uuid:", error);
		res.status(500).json({ error: "An error occurred while generating uuid." });
	}
};

module.exports = { get };
