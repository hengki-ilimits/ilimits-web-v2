const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Your Sequelize instance

const SectionContent = sequelize.define(
	"section_content",
	{
		id: {
			type: DataTypes.STRING,
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
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		buttonLink: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		elementId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "section_content",
		timestamps: false,
	}
);

module.exports = SectionContent;
