const mysql = require("mysql2/promise");
const { dbConfig } = require("../config/config.js");
const { generateTimestampBasedUUID } = require("../utils/uuid.js");

const pool = mysql.createPool(dbConfig);

const TABLE_NAME = "emailsubscription";
const TABLE_ROWS = "id, emailAddress, createdDate";
const TABLE_INSERT_ROWS = "id, emailAddress";

const insertEmail = async (email) => {
	try {
		const connection = await pool.getConnection();
		const id = generateTimestampBasedUUID();
		const sql = `INSERT INTO ${TABLE_NAME} (${TABLE_INSERT_ROWS}) VALUES (?, ?)`;
		const values = [id, email];
		const result = await connection.query(sql, values);
		connection.release();
	} catch (error) {
		throw error;
	}
};

module.exports = {
	insertEmail,
};
