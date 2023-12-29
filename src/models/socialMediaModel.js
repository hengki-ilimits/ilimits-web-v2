const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Your Sequelize instance

const SocialMediaModel = sequelize.define(
	"socialmedia",
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		href: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		visibility: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		createdAt: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		createdBy: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		modifiedAt: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		modifiedBy: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "socialmedia",
		timestamps: false,
	}
);

module.exports = SocialMediaModel;
