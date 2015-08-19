var Sequelize = require('sequelize')

module.exports = function(sequelize) {
	var Vendor = sequelize.define('vendors', {
		vendor_id: {type: Sequelize.INTEGER(11).UNSIGNED, primaryKey: true, autoIncrement: true },
		vendor_name: Sequelize.STRING,
		logo: Sequelize.STRING
	});
	return {
		Vendor:Vendor
	};	
};

