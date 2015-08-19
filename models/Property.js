var Sequelize = require('sequelize')

module.exports = function(sequelize) {
	var Property = sequelize.define('properties', {
		property_id: {type: Sequelize.INTEGER(11).UNSIGNED, primaryKey: true, autoIncrement: true },
		user_id: Sequelize.INTEGER(11).UNSIGNED,
		address_line_1: Sequelize.STRING,
		address_line_2: Sequelize.STRING,
		city: Sequelize.STRING,
		state: Sequelize.STRING,
		proof: Sequelize.STRING,
		pincode: Sequelize.STRING(6),
		type: Sequelize.STRING,
		cf_contact_type: Sequelize.STRING,
		cf_contact_name: Sequelize.STRING,
		cf_contact_phone: Sequelize.STRING(10)
	});
	return {
		Property:Property
	};	
};

