const mysql = require("mysql2/promise");
const { dbConfig } = require("../config/config.js");

const pool = mysql.createPool(dbConfig);

const TABLE_NAME = "socialmedia";
const TABLE_ROWS = "id, name, href, visibility";

const findAll = async () => {
	const connection = await pool.getConnection();

	let stringQuery = `SELECT ${TABLE_ROWS} FROM ${TABLE_NAME} `;

	stringQuery += `WHERE visibility = 1 `;

	const [rows] = await connection.query(stringQuery);
	connection.release();

	return rows;
};

module.exports = {
	findAll,
};
