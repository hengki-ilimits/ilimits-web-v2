const mysql = require("mysql2/promise");
const { dbConfig } = require("../config/config.js");

const pool = mysql.createPool(dbConfig);

const TABLE_NAME = "licenseinfo";
const TABLE_ROWS = "id, sectionId, textContent";

const findAll = async () => {
	const connection = await pool.getConnection();
	const [rows] = await connection.query(`SELECT ${TABLE_ROWS} FROM ${TABLE_NAME}`);
	connection.release();

	return rows;
};

module.exports = {
	findAll,
};
