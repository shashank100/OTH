var Sequelize = require('sequelize')

module.exports = function(sequelize) {
	var Offer = sequelize.define('offers', {
		offer_id: {type: Sequelize.INTEGER(11).UNSIGNED, primaryKey: true, autoIncrement: true },
		title: Sequelize.STRING,
		vendor_id: Sequelize.INTEGER(11).UNSIGNED,
		value: Sequelize.STRING,
		validity: Sequelize.DATE,
		value_type: Sequelize.STRING,
		validity_region: Sequelize.STRING,
		how_to_redeem: Sequelize.STRING(6),
		tandc: Sequelize.STRING,
		type: Sequelize.STRING,
		code: Sequelize.STRING,
		points: Sequelize.STRING,
		photo: Sequelize.STRING
	});
	return {
		Offer:Offer
	};	
};

