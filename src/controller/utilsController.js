const { generateTimestampBasedUUID } = require("../utils/uuid");
const mysql = require("mysql2/promise");
const { dbConfig } = require("../config/config.js");

const pool = mysql.createPool(dbConfig);

const generateUUID = async (req, res) => {
	try {
		let number = req.params.number;
		const result = {};
		if (number) {
			number = number >= 15 ? 15 : number;
			number = number <= 1 ? 1 : number;
			const uuid = [];
			for (let n = 0; n < number; n++) {
				uuid.push(generateTimestampBasedUUID());
			}
			result.uuid = uuid;
		} else {
			result.uuid = generateTimestampBasedUUID();
		}

		res.status(200).json(result);
	} catch (error) {
		console.error("Error generating uuid:", error);
		res.status(500).json({ error: "An error occurred while generating uuid." });
	}
};

const uploadFile = async (req, res) => {
	try {
		if (!req.file) {
			return res.status(400).json({ message: "No file uploaded" });
		}
		const fileData = await readFile(req.file.path);
		const connection = await pool.getConnection();
		const id = generateTimestampBasedUUID();
		const query =
			"INSERT INTO images (id, filename, original_filename, image_data, content_type) VALUES (?, ?, ?, ?, ?)";
		await connection.query(query, [id, req.file.filename, req.file.originalname, fileData, req.file.mimetype]);
		connection.release();

		res.status(200).json({ message: "File uploaded successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Server Error" });
	}
};

const downloadFile = async (req, res) => {
	try {
		const connection = await pool.getConnection();
		const query = "SELECT image_data FROM images WHERE id = ?";
		const [rows] = await connection.query(query, [req.params.id]);
		connection.release();

		if (rows.length === 0 || !rows[0].image_data) {
			return res.status(404).json({ message: "Image not found" });
		}

		const imageData = Buffer.from(rows[0].image_data, "binary");
		res.set("Content-Type", rows[0].content_type); // Set the content type based on database value
		res.send(imageData);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Server Error" });
	}
};

const readFile = (filePath) => {
	const fs = require("fs").promises;
	return fs.readFile(filePath);
};

module.exports = { generateUUID, uploadFile, downloadFile };
