const EmailSubscriptionService = require("../services/emailSubscriptionService");

const subscribe = async (req, res) => {
	try {
		const { email } = req.body;
		await EmailSubscriptionService.subscribeEmail(email);
		res.status(200).json({ message: "Email subscribed successfully", email });
	} catch (error) {
		res.status(500).json({ error: "Error subscribing email" });
	}
};

module.exports = { subscribe };
