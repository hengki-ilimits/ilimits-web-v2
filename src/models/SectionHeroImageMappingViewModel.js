const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Your Sequelize instance

const SectionHeroImageMappingView = sequelize.define(
	"section_hero_image_mapping_view",
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		imageId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		imageHeroHref: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		sectionId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		sectionName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "section_hero_image_mapping_view",
		timestamps: false,
	}
);

module.exports = SectionHeroImageMappingView;
