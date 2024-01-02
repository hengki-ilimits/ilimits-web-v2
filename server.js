const express = require("express");
const { config } = require("dotenv");
const bodyParser = require("body-parser");

const { port } = require("./src/config/config.js");
const apiRoutes = require("./src/routes/api");
const https = require("https");
const cors = require('cors');
config();

// remember to secure your api

const app = express();
const allowedDomains = ["https://uat-ilimits-v2.soliditi.tech/"]; // Add your allowed domains here

const corsOptions = {
	origin: function (origin, callback) {
		if (allowedDomains.indexOf(origin) !== -1 || !origin) {
			// If the origin is in the allowed domains list or if it's not provided (non-CORS request), allow access
			callback(null, true);
		} else {
			// If the origin is not in the allowed domains list, deny access
			callback(new Error("Not allowed by CORS"));
		}
	},
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(
	express.static("public", {
		maxAge: 0, // Set the maximum age for caching (1 day in this case)
	})
);
app.use((req, res, next) => {
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	next();
});
app.use("/", apiRoutes);
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
