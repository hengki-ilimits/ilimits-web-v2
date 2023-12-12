const log4js = require("log4js");
const mysql = require("mysql2/promise");
const { dbConfig } = require("../config/config.js");
const { generateTimestampBasedUUID } = require("../utils/uuid.js");

const pool = mysql.createPool(dbConfig);

const TABLE_NAME = "menu";
const TABLE_ROWS = "id, sectionId, displayName, groupMenuId, href";

const VIEW_NAME = "menuView";
const VIEW_ROWS = "id, sectionId, displayName, href, groupNameId, groupName";

log4js.configure({
	appenders: { file: { type: "file", filename: "query.log" } },
	categories: { default: { appenders: ["file"], level: "info" } },
});

const logger = log4js.getLogger();

const findAll = async (orderBy, orderType) => {
	const connection = await pool.getConnection();

	orderBy = orderBy !== "" && orderBy !== undefined ? orderBy : "groupNameId";
	orderType = orderType !== "" && orderType !== undefined ? orderType : "ASC";

	let stringQuery = `SELECT ${VIEW_ROWS} FROM ${VIEW_NAME} `;

	stringQuery += `WHERE groupVisibility = 1 && menuVisibility = 1 `;

	stringQuery += `ORDER BY ${orderBy} ${orderType}`;

	logger.info(stringQuery);

	const [rows] = await connection.query(stringQuery);
	connection.release();

	return rows;
};

module.exports = {
	findAll,
};
