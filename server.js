var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');
var session = require('client-sessions');
var salt = bcrypt.genSaltSync(10);
var app = express();


app.set('port', process.env.PORT || 4000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	cookieName:'session',
	secret:'sdafljhl435kjh534jl1kh43513245j4531jk345',
	duration: 60*1000*43829,
	cookie: {
		maxAge: null,
		ephemeral: true,
		httpOnly: true,
		secure: false
	}
}));
app.use(session({
	cookieName:'abouthome',
	secret:'sdafljhl435kjh534jl1asdjhasjd43513245j4531jk345',
	duration: 60*1000*43829,
	cookie: {
		maxAge: null,
		ephemeral: true,
		httpOnly: true,
		secure: false
	}
}));

app.use(session({
	cookieName:'shopping',
	secret:'sdafljhl435kjh534jl1asdjhasjd43513245j4531jk345',
	duration: 60*1000*43829,
	cookie: {
		maxAge: null,
		ephemeral: true,
		httpOnly: true,
		secure: false
	}
}));

var sequelize  	= new Sequelize('OTH', 'root', 'maxheap@123', {
						host: 'localhost',
						dialect: 'mysql',
						define: {
							timestamps: false
						}
					});

app.post('/authenticate', function(req, res) {
	sequelize.sync();
	var userModel = require('./models/User')(sequelize)
	var userTask  = userModel.User;
	var propertyModel = require('./models/Property')(sequelize)
	var propertyTask = propertyModel.Property;

	userTask
		.findAll({
			attributes:['user_id','username','password', 'role'],
			where: {
				email: req.body.email
			}
		})
		.then(function(user) {
			if(0 == user.length)
				res.json({"exist": false, "error": null, "message": "No User Found"})
			else {
				if(true == bcrypt.compareSync(req.body.password,user[0].dataValues['password'])) {
					req.session.userId = user[0].dataValues['user_id'];
					req.session.role = user[0].dataValues['role'];
					


					propertyTask
						.findAll({
							attributes: ['user_id','type'],
							where:{
								user_id: req.session.userId
							}
						})
						.then(function(userProperty) {
							if(0 != userProperty) {
								req.abouthome.registered = true;
								req.session.type = userProperty[0].dataValues['type'];
								res.json({"exist":true, "error": null, "message": {"userId": user[0].dataValues['user_id'] ,"userName": user[0].dataValues['username'], "role": user[0].dataValues['role'], "propertyRegistered": true}})
							}
							else {
								req.abouthome.registered = false;
								res.json({"exist":true, "error": null, "message": {"userId": user[0].dataValues['user_id'] ,"userName": user[0].dataValues['username'], "role": user[0].dataValues['role'], "propertyRegistered": false}})
							}
						})
						.catch(function(err) {
							res.json({"exist": false, "error": err, "message": "Some Error Occured"})
						})

				}
				else {
					req.session.reset();
					res.json({"exist": false, "error": null, "message": "Incorrect Password"})
				}
			}
		})
		.catch(function(err) {
			res.json({"exist": false, "error": err, "message": "Some Error Occured"})
		})
});


app.post('/getUserInfo', function(req, res) {
	var model = require('./models/User')(sequelize)
	var Task  = model.User;
	
	Task
		.findAll({
			attributes:['username'],
			where: {
				user_id: req.session.userId
			}
		})
		.then(function(user) {
			if(0 == user.length) {
				res.json({"exist": false, "error": null, "message": "No User Found"})
			}
			else {
				res.json({"exist": true, "error": null, "message": user[0].dataValues['username']} )
			}
		})
		.catch(function(err) {
			res.json({"exist": false, "error": err, "message": "Some Error Occured"})
		})
});

app.post('/register', function(req, res) {
	
	var model = require('./models/User')(sequelize);
	var Task  = model.User;
		sequelize.sync();

	

	Task
		.create({
			username: req.body.name,
			email: req.body.email,
			password: bcrypt.hashSync("1234", salt),
			phone: req.body.number,
			role: "user",
			status: "pending"
		})
		.then(function(user) {
			if(0 != user.length) {
				res.json({ "register": true, "error": null, "message": "User Created"});
			}
		})
		.catch(function(err) {
			res.json({"register": false, "error": err, "message": "Some Error Occured"});
		});
});

app.post('/registerAddress', function(req, res) {

			req.abouthome.address_address_line1 = req.body.addressLine1;
			req.abouthome.address_address_line2 = req.body.addressLine2;
			req.abouthome.state = req.body.state;
			req.abouthome.city = req.body.city;
			req.abouthome.pincode = req.body.pincode;
			req.abouthome.type =  req.body.type;
			req.abouthome.step = 1;
			res.json({"error": null, "message": "completed"});
});

app.post('/upload', function(req, res) {
	var model = require('./models/Property')(sequelize);
	var Task  = model.Property;
		console.log(req.files)
		Task
		.update({
			proof: req.body
		},{
			where: {
				user_id: req.session.userId
			}
		})
		.then(function(document) {
			console.log(document)
			if(0 != document.length) {
				res.json({ "uploaded": true, "error": null, "message": "Document Uploaded Successfully"});
			}
		})
		.catch(function(err) {
			console.log(err);
			res.json({"register": false, "error": err, "message": "Some Error Occured"});
		});

});

app.post('/uploadCFContact', function(req, res) {
	sequelize.sync();
	var model = require('./models/Property')(sequelize);
	var Task  = model.Property;
		
		Task
		.create({
			user_id: req.session.userId,
			address_line_1: req.abouthome.addressLine1,
			address_line_2: req.abouthome.addressLine2,
			city : req.abouthome.city,
			state: req.abouthome.state,
			type: req.abouthome.type,
			pincode: req.abouthome.pincode,
			cf_contact_type: req.body.type,
			cf_contact_name: req.body.name,
			cf_contact_phone: req.body.phone
		})
		.then(function(data) {
			if(0 != date.length) {
				res.json({ "created": true, "error": null, "message": "Verification Details added Successfully"});
			}
		})
		.catch(function(err) {
			res.json({"created": false, "error": err, "message": "Some Error Occured"});
		});
});


app.post('/getUserWithStatus', function(req, res) {
	console.log(req.body.status);
	sequelize.query('SELECT user.username AS user,user.email,user.phone AS number,property.type,property.cf_contact_name AS commonfloorContactName,property.cf_contact_phone AS commonfloorContactNumber FROM users AS user,properties AS property WHERE property.user_id=user.user_id AND user.status=? AND user.role="user"',{replacements: [req.body.status],type: sequelize.QueryTypes.SELECT }).then(function (results) {
		res.json(results);
	});

});

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});