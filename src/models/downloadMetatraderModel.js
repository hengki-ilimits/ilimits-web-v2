const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Your Sequelize instance

const DownloadMetatrader = sequelize.define(
	"download_metatrader_component",
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		heading: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		subHeading: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		textContent: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		buttonLabel: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		imageFileName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "download_metatrader_component",
		timestamps: false,
	}
);

module.exports = DownloadMetatrader;
