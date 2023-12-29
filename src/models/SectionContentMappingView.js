const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Your Sequelize instance

const SectionContentMappingView = sequelize.define(
	"section_content_mapping_view",
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		sectionName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		elementId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contentHeading: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contentSubHeading: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contentParagraph: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contentFootNote: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contentButtonLabel: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contentButtonHref: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contentImageId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contentImageHref: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "section_content_mapping_view",
		timestamps: false,
	}
);

module.exports = SectionContentMappingView;
