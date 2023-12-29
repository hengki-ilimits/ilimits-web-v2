const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Your Sequelize instance

const GroupMenuMappingView = sequelize.define(
	"group_menu_mapping_view",
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		groupMenuName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		groupMenuDisplayName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		menuName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		menuHref: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		groupMenuVisibility: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		pos: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		tableName: "group_menu_mapping_view",
		timestamps: false,
	}
);

module.exports = GroupMenuMappingView;
