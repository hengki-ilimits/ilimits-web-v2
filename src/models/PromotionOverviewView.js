const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Your Sequelize instance

const PromotionOverviewView = sequelize.define(
	"promotion_overview_view",
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		subTitle: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		footNote: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		href: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contentStatus: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		textContent: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		imageFileName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		imageId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		imageContentType: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "promotion_overview_view",
		timestamps: false,
	}
);

module.exports = PromotionOverviewView;
