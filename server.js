const express = require("express");
const { config } = require("dotenv");
const bodyParser = require("body-parser");

const { port } = require("./src/config/config.js");
const apiRoutes = require("./src/routes/api");

config();

// remember to secure your api

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/", apiRoutes);
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
