(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var AboutHomeActions = (function () {
	function AboutHomeActions() {
		_classCallCheck(this, AboutHomeActions);

		this.generateActions('getName', 'updateLine1', 'updateLine2', 'updateCity', 'updateState', 'updatePincode', 'invalidLine1', 'invalidLine2', 'invalidCity', 'invalidState', 'invalidPincode', 'registerFail', 'selectType', 'registerSuccess');
	}

	_createClass(AboutHomeActions, [{
		key: 'getUser',
		value: function getUser() {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/getUserInfo'
			}).done(function (data) {
				if (false == data.exist) {
					//handle redirect, user does not exist
				} else {
						_this.actions.getName(data);
					}
			}).fail(function (jqXhr) {
				_this.actions.callFail(data.message);
			});
		}
	}, {
		key: 'putAboutHome',
		value: function putAboutHome(registerHome) {
			var _this2 = this;

			$.ajax({
				type: 'POST',
				url: '/registerAddress',
				data: { addressLine1: registerHome.addressLine1, addressLine2: registerHome.addressLine2, city: registerHome.city, state: registerHome.state, pincode: registerHome.pincode, type: registerHome.type }
			}).done(function (data) {
				console.log(data.message);
				_this2.actions.registerSuccess(registerHome);
			}).fail(function (jqXhr) {
				_this2.actions.registerFail('Some error occured');
			});
		}
	}]);

	return AboutHomeActions;
})();

exports['default'] = _alt2['default'].createActions(AboutHomeActions);
module.exports = exports['default'];

},{"../alt":8,"underscore":"underscore"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var AdminHeaderActions = (function () {
	function AdminHeaderActions() {
		_classCallCheck(this, AdminHeaderActions);

		this.generateActions('redirectToVerification', 'redirectToOffer');
	}

	_createClass(AdminHeaderActions, [{
		key: 'uploadDocument',
		value: function uploadDocument(files) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/upload',
				data: files.file,
				contentType: 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p',
				processData: false,
				cache: false
			}).done(function (data) {
				if (false == data.register) {
					_this.actions.uploadFail(data.message);
				} else {
					(0, _underscore.assign)(files, data);
					_this.actions.uploadSuccess(files);
				}
			}).fail(function (jqXhr) {
				_this.actions.uploadFail('Some error occured');
			});
		}
	}]);

	return AdminHeaderActions;
})();

exports['default'] = _alt2['default'].createActions(AdminHeaderActions);
module.exports = exports['default'];

},{"../alt":8,"underscore":"underscore"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var CFContactActions = (function () {
	function CFContactActions() {
		_classCallCheck(this, CFContactActions);

		this.generateActions('updateCFContactName', 'updateCFContactPhone', 'updateCFContactType', 'invalidName', 'invalidPhone', 'invalidType', 'updateFail', 'updateSucces');
	}

	_createClass(CFContactActions, [{
		key: 'updateCFContact',
		value: function updateCFContact(credentials) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/uploadCFContact',
				data: { name: credentials.name, phone: credentials.phone, type: credentials.type }
			}).done(function (data) {}).fail(function (jqXhr) {
				_this.actions.uploadFail('Some error occured');
			});
		}
	}]);

	return CFContactActions;
})();

exports['default'] = _alt2['default'].createActions(CFContactActions);
module.exports = exports['default'];

},{"../alt":8,"underscore":"underscore"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var DropZoneActions = (function () {
	function DropZoneActions() {
		_classCallCheck(this, DropZoneActions);

		this.generateActions('invalidType', 'uploadFail', 'uploadSuccess', 'removeWarning');
	}

	_createClass(DropZoneActions, [{
		key: 'uploadDocument',
		value: function uploadDocument(files) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/upload',
				data: files.file,
				contentType: 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p',
				processData: false,
				cache: false
			}).done(function (data) {
				if (false == data.register) {
					_this.actions.uploadFail(data.message);
				} else {
					(0, _underscore.assign)(files, data);
					_this.actions.uploadSuccess(files);
				}
			}).fail(function (jqXhr) {
				_this.actions.uploadFail('Some error occured');
			});
		}
	}]);

	return DropZoneActions;
})();

exports['default'] = _alt2['default'].createActions(DropZoneActions);
module.exports = exports['default'];

},{"../alt":8,"underscore":"underscore"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var LoginFormActions = (function () {
	function LoginFormActions() {
		_classCallCheck(this, LoginFormActions);

		this.generateActions('loginFormSuccess', 'loginFormFail', 'invalidEmail', 'invalidPassword', 'updateEmail', 'updatePassword', 'signUp');
	}

	_createClass(LoginFormActions, [{
		key: 'login',
		value: function login(credentials) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/authenticate',
				data: { email: credentials.email, password: credentials.password }
			}).done(function (data) {
				if (false == data.exist) {
					_this.actions.loginFormFail(data.message);
				} else {
					(0, _underscore.assign)(credentials, data);
					_this.actions.loginFormSuccess(credentials);
				}
			}).fail(function (jqXhr) {
				_this.actions.loginFormFail('Some error occured');
			});
		}
	}]);

	return LoginFormActions;
})();

exports['default'] = _alt2['default'].createActions(LoginFormActions);
module.exports = exports['default'];

},{"../alt":8,"underscore":"underscore"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var SignUpFormActions = (function () {
	function SignUpFormActions() {
		_classCallCheck(this, SignUpFormActions);

		this.generateActions('signUpFormSuccess', 'signUpFormFail', 'invalidEmail', 'invalidPassword', 'invalidNumber', 'invalidUsername', 'updateEmail', 'updatePassword', 'updateUsername', 'updateNumber', 'login');
	}

	_createClass(SignUpFormActions, [{
		key: 'signup',
		value: function signup(credentials) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/register',
				data: { name: credentials.name, email: credentials.email, password: credentials.password, number: credentials.number }
			}).done(function (data) {
				if (false == data.register) {
					_this.actions.signUpFormFail(data.message);
				} else {
					(0, _underscore.assign)(credentials, data);
					_this.actions.signUpFormSuccess(credentials);
				}
			}).fail(function (jqXhr) {
				_this.actions.signUpFormFail('Some error occured');
			});
		}
	}]);

	return SignUpFormActions;
})();

exports['default'] = _alt2['default'].createActions(SignUpFormActions);
module.exports = exports['default'];

},{"../alt":8,"underscore":"underscore"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var VerificationActions = (function () {
	function VerificationActions() {
		_classCallCheck(this, VerificationActions);

		this.generateActions('callSuccess', 'callFail');
	}

	_createClass(VerificationActions, [{
		key: 'getUserWithStatus',
		value: function getUserWithStatus(page) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/getUserWithStatus',
				data: page
			}).done(function (data) {
				console.log(data);
				_this.actions.callSuccess(data);
			}).fail(function (jqXhr) {
				_this.actions.callFail('Some error occured');
			});
		}
	}]);

	return VerificationActions;
})();

exports['default'] = _alt2['default'].createActions(VerificationActions);
module.exports = exports['default'];

},{"../alt":8,"underscore":"underscore"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _storesAboutHomeStore = require('../stores/AboutHomeStore');

var _storesAboutHomeStore2 = _interopRequireDefault(_storesAboutHomeStore);

var _actionsAboutHomeActions = require('../actions/AboutHomeActions');

var _actionsAboutHomeActions2 = _interopRequireDefault(_actionsAboutHomeActions);

var AboutHome = (function (_React$Component) {
	_inherits(AboutHome, _React$Component);

	function AboutHome(props) {
		_classCallCheck(this, AboutHome);

		_get(Object.getPrototypeOf(AboutHome.prototype), 'constructor', this).call(this, props);
		this.state = _storesAboutHomeStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(AboutHome, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesAboutHomeStore2['default'].listen(this.onChange);
			_actionsAboutHomeActions2['default'].getUser();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesAboutHomeStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleType',
		value: function handleType() {
			_actionsAboutHomeActions2['default'].selectType();
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {
			var line1 = this.state.line1;
			var line2 = this.state.line2;
			var state = this.state.state;
			var city = this.state.city;
			var pincode = this.state.pincode;
			var type = '';

			if (this.state.type == 0) {
				type = 'buy';
			} else {
				type = 'rent';
			}

			if (line1 == "") {
				_actionsAboutHomeActions2['default'].invalidLine1();
			}

			if (line2 == "") {
				_actionsAboutHomeActions2['default'].invalidLine2();
			}

			if (state == "") {
				_actionsAboutHomeActions2['default'].invalidState();
			}

			if (city == "") {
				_actionsAboutHomeActions2['default'].invalidCity();
			}

			if (pincode == "") {
				_actionsAboutHomeActions2['default'].invalidPincode();
			}

			if (line1 && line2 && city && state && pincode) {
				_actionsAboutHomeActions2['default'].putAboutHome({
					addressLine1: line1,
					addressLine2: line2,
					city: city,
					state: state,
					pincode: pincode,
					type: type,
					router: this.context.router
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid loginPage registerPage' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row pDetails' },
					_react2['default'].createElement(
						'div',
						{ className: 'pDetailsInnerWrapper' },
						_react2['default'].createElement(
							'center',
							null,
							_react2['default'].createElement(
								'ul',
								null,
								_react2['default'].createElement(
									'li',
									{ className: 'activeLiPdetails' },
									'About Your Home'
								),
								_react2['default'].createElement(
									'li',
									null,
									'Documentation'
								),
								_react2['default'].createElement(
									'li',
									null,
									'Your Contact @ CF'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-sm-12 aboutYourHome' },
							_react2['default'].createElement(
								'label',
								null,
								'Hi ',
								this.state.name == "" ? 'User' : this.state.name,
								', to start with tell us about your new home'
							),
							_react2['default'].createElement(
								'div',
								{ className: 'formWrap' },
								_react2['default'].createElement(
									'span',
									null,
									'Address Line 1:'
								),
								_react2['default'].createElement('input', { type: 'text', value: this.state.Line1, onChange: _actionsAboutHomeActions2['default'].updateLine1, placeholder: '' }),
								_react2['default'].createElement(
									'span',
									null,
									'Address Line 2:'
								),
								_react2['default'].createElement('input', { type: 'text', value: this.state.Line2, onChange: _actionsAboutHomeActions2['default'].updateLine2, placeholder: '' }),
								_react2['default'].createElement(
									'div',
									{ className: 'col-sm-4 l' },
									_react2['default'].createElement(
										'span',
										null,
										'Town/City:'
									),
									_react2['default'].createElement('input', { type: 'text', value: this.state.city, onChange: _actionsAboutHomeActions2['default'].updateCity, placeholder: '' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-sm-4' },
									_react2['default'].createElement(
										'span',
										null,
										'State:'
									),
									_react2['default'].createElement('input', { type: 'text', value: this.state.state, onChange: _actionsAboutHomeActions2['default'].updateState, placeholder: '' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-sm-4 r' },
									_react2['default'].createElement(
										'span',
										null,
										'Pincode:'
									),
									_react2['default'].createElement('input', { type: 'text', value: this.state.pincode, onChange: _actionsAboutHomeActions2['default'].updatePincode, placeholder: '' })
								)
							),
							_react2['default'].createElement('input', { type: 'button', value: 'Next', onClick: this.handleSubmit.bind(this) })
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return AboutHome;
})(_react2['default'].Component);

AboutHome.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = AboutHome;
module.exports = exports['default'];

},{"../actions/AboutHomeActions":1,"../stores/AboutHomeStore":31,"./Footer":19,"./Header":21,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsAdminHeaderActions = require('../actions/AdminHeaderActions');

var _actionsAdminHeaderActions2 = _interopRequireDefault(_actionsAdminHeaderActions);

var _storesAdminHeaderStore = require('../stores/AdminHeaderStore');

var _storesAdminHeaderStore2 = _interopRequireDefault(_storesAdminHeaderStore);

var AdminHeader = (function (_React$Component) {
	_inherits(AdminHeader, _React$Component);

	function AdminHeader(props) {
		_classCallCheck(this, AdminHeader);

		_get(Object.getPrototypeOf(AdminHeader.prototype), 'constructor', this).call(this, props);
		this.onClick = this.onClick.bind(this);
	}

	_createClass(AdminHeader, [{
		key: 'handleVerificationRedirect',
		value: function handleVerificationRedirect() {
			_actionsAdminHeaderActions2['default'].redirectToVerification({
				router: this.context.router
			});
		}
	}, {
		key: 'handleOfferRedirect',
		value: function handleOfferRedirect() {
			_actionsAdminHeaderActions2['default'].redirectToOffer({
				router: this.context.router
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesAdminHeaderStore2['default'].listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesAdminHeaderStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onClick',
		value: function onClick(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'row headerSection' },
				_react2['default'].createElement(
					'div',
					{ className: 'header1' },
					_react2['default'].createElement(
						'div',
						{ className: 'col-xs-6 col-md-6' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-sm-12 imgLogoWrap' },
							_react2['default'].createElement('img', { src: 'img/oth_logo.jpg', style: { width: 35 + "%" } }),
							_react2['default'].createElement(
								'label',
								null,
								'(Admin Portal)'
							)
						)
					),
					_react2['default'].createElement('div', { className: 'col-md-6 col-sm-6' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'borderHeader' },
					_react2['default'].createElement('div', { className: 'col-md-6 col-xs-6 orange' }),
					_react2['default'].createElement('div', { className: 'col-md-6 col-xs-6 brown' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'header2' },
					_react2['default'].createElement(
						'div',
						{ className: 'contentMargin' },
						_react2['default'].createElement(
							'button',
							{ onClick: this.handleVerificationRedirect.bind(this) },
							'verification'
						),
						_react2['default'].createElement(
							'button',
							{ onClick: this.handleOfferRedirect.bind(this) },
							'offers'
						)
					)
				)
			);
		}
	}]);

	return AdminHeader;
})(_react2['default'].Component);

AdminHeader.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = AdminHeader;
module.exports = exports['default'];

},{"../actions/AdminHeaderActions":2,"../stores/AdminHeaderStore":32,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AdminOffer = (function (_React$Component) {
	_inherits(AdminOffer, _React$Component);

	function AdminOffer() {
		_classCallCheck(this, AdminOffer);

		_get(Object.getPrototypeOf(AdminOffer.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(AdminOffer, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				'hello from admin offer please set me up'
			);
		}
	}]);

	return AdminOffer;
})(_react2['default'].Component);

exports['default'] = AdminOffer;
module.exports = exports['default'];

},{"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _storesCFContactStore = require('../stores/CFContactStore');

var _storesCFContactStore2 = _interopRequireDefault(_storesCFContactStore);

var _actionsCFContactActions = require('../actions/CFContactActions');

var _actionsCFContactActions2 = _interopRequireDefault(_actionsCFContactActions);

var CFContact = (function (_React$Component) {
	_inherits(CFContact, _React$Component);

	function CFContact(props) {
		_classCallCheck(this, CFContact);

		_get(Object.getPrototypeOf(CFContact.prototype), 'constructor', this).call(this, props);
		this.state = _storesCFContactStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(CFContact, [{
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesCFContactStore2['default'].listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_actionsCFContactActions2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {
			var name = this.state.name;
			var phone = this.state.phone;
			var type = this.state.contactType;

			if (!name) {
				_actionsCFContactActions2['default'].invalidName();
			}

			if (!phone) {
				_actionsCFContactActions2['default'].invalidPhone();
			}

			if (!type) {
				_actionsCFContactActions2['default'].invalidType();
			}

			if (name && phone && type) {
				_actionsCFContactActions2['default'].updateCFContact({
					name: name,
					phone: phone,
					type: type,
					router: this.context.router
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid loginPage registerPage' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'pDetailsInnerWrapper' },
					_react2['default'].createElement(
						'center',
						null,
						_react2['default'].createElement(
							'ul',
							null,
							_react2['default'].createElement(
								'li',
								null,
								'About Your Home'
							),
							_react2['default'].createElement(
								'li',
								null,
								'Documentation'
							),
							_react2['default'].createElement(
								'li',
								{ className: 'activeLiPdetails' },
								'Your Contact @ CF'
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col-sm-12 contactAtCF' },
						_react2['default'].createElement(
							'label',
							null,
							'Hi Abash, to start with tell us about your new home'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'formWrap' },
							_react2['default'].createElement(
								'span',
								null,
								'Please select one:'
							),
							_react2['default'].createElement(
								'div',
								{ className: 'inputRadio' },
								_react2['default'].createElement('input', { type: 'radio', name: 'contactType', value: 'owner', onChange: _actionsCFContactActions2['default'].updateCFContactType, checked: this.state.contactType === 'owner' }),
								_react2['default'].createElement(
									'label',
									null,
									'Owner'
								),
								_react2['default'].createElement('input', { type: 'radio', name: 'contactType', value: 'builder', onChange: _actionsCFContactActions2['default'].updateCFContactType, checked: this.state.contactType === 'builder' }),
								_react2['default'].createElement(
									'label',
									null,
									'Builder'
								),
								_react2['default'].createElement('input', { type: 'radio', name: 'contactType', value: 'agent', onChange: _actionsCFContactActions2['default'].updateCFContactType, checked: this.state.contactType === 'agent' }),
								_react2['default'].createElement(
									'label',
									{ style: { "marginRight": 0 + "px" } },
									'Agent'
								)
							),
							_react2['default'].createElement(
								'center',
								null,
								_react2['default'].createElement('input', { type: 'text', placeholder: 'Name', value: this.state.name, onChange: _actionsCFContactActions2['default'].updateCFContactName }),
								_react2['default'].createElement('input', { type: 'text', placeholder: 'Mobile No', value: this.state.phone, onChange: _actionsCFContactActions2['default'].updateCFContactPhone })
							)
						),
						_react2['default'].createElement('input', { type: 'button', value: 'Done', onClick: this.handleSubmit.bind(this) })
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return CFContact;
})(_react2['default'].Component);

CFContact.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = CFContact;
module.exports = exports['default'];

},{"../actions/CFContactActions":3,"../stores/CFContactStore":33,"./Footer":19,"./Header":21,"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var Cart = (function (_React$Component) {
	_inherits(Cart, _React$Component);

	function Cart() {
		_classCallCheck(this, Cart);

		_get(Object.getPrototypeOf(Cart.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Cart, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid ' },
				_react2['default'].createElement(
					'div',
					{ className: 'row OthHeaderSection' },
					_react2['default'].createElement(
						'div',
						{ className: 'header1' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-6 col-md-6' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-sm-12 imgLogoWrap' },
								_react2['default'].createElement(
									'a',
									{ href: '/' },
									_react2['default'].createElement('img', { src: 'img/oth_logo.jpg', style: { width: 35 + "%" } }),
									' '
								)
							)
						),
						_react2['default'].createElement('div', { className: 'col-md-6 col-sm-6' })
					),
					_react2['default'].createElement(
						'div',
						{ className: 'borderHeader' },
						_react2['default'].createElement('div', { className: 'col-md-6 col-xs-6 orange' }),
						_react2['default'].createElement('div', { className: 'col-md-6 col-xs-6 brown' })
					),
					_react2['default'].createElement(
						'div',
						{ className: 'header2' },
						_react2['default'].createElement(
							'div',
							{ className: 'filterWrapper' },
							_react2['default'].createElement(
								'center',
								null,
								_react2['default'].createElement(
									'ul',
									{ className: 'filterMenu' },
									'Category >',
									_react2['default'].createElement(
										'li',
										null,
										'Home Loans'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Furnitures'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Home Services'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Relocation'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Appliances'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Health & Fitness'
									),
									_react2['default'].createElement(
										'li',
										{ className: 'lilast' },
										_react2['default'].createElement(
											'select',
											{ 'class': 'form-control' },
											_react2['default'].createElement(
												'option',
												null,
												'Others'
											)
										)
									)
								)
							)
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'row offersPageDT' },
					_react2['default'].createElement(
						'div',
						{ className: 'offerTilesWrap' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS 5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return Cart;
})(_react2['default'].Component);

exports['default'] = Cart;
module.exports = exports['default'];

},{"./Footer":19,"./Header":21,"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _DropZone = require('./DropZone');

var _DropZone2 = _interopRequireDefault(_DropZone);

var Documentation = (function (_React$Component) {
	_inherits(Documentation, _React$Component);

	function Documentation() {
		_classCallCheck(this, Documentation);

		_get(Object.getPrototypeOf(Documentation.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Documentation, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ classNameNameName: 'container-fluid loginPage registerPage' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row pDetails' },
					_react2['default'].createElement(
						'div',
						{ className: 'pDetailsInnerWrapper' },
						_react2['default'].createElement(
							'center',
							null,
							_react2['default'].createElement(
								'ul',
								null,
								_react2['default'].createElement(
									'li',
									null,
									'About Your Home'
								),
								_react2['default'].createElement(
									'li',
									{ className: 'activeLiPdetails' },
									'Documentation'
								),
								_react2['default'].createElement(
									'li',
									null,
									'Your Contact @ CF'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-sm-12 documentation' },
							_react2['default'].createElement(
								'label',
								null,
								'Please help us verify your claim by uploading one of the following documents:',
								_react2['default'].createElement('br', null),
								'-  Rental Agreement     -  Sale Agreement        -  Booking Receipt'
							),
							_react2['default'].createElement(_DropZone2['default'], null),
							_react2['default'].createElement('input', { type: 'button', value: 'Next' })
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return Documentation;
})(_react2['default'].Component);

exports['default'] = Documentation;
module.exports = exports['default'];

},{"./DropZone":16,"./Footer":19,"./Header":21,"react":"react"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _actionsDropZoneActions = require('../actions/DropZoneActions');

var _actionsDropZoneActions2 = _interopRequireDefault(_actionsDropZoneActions);

var _storesDropZoneStore = require('../stores/DropZoneStore');

var _storesDropZoneStore2 = _interopRequireDefault(_storesDropZoneStore);

var DropZone = (function (_React$Component) {
	_inherits(DropZone, _React$Component);

	function DropZone(props) {
		_classCallCheck(this, DropZone);

		_get(Object.getPrototypeOf(DropZone.prototype), 'constructor', this).call(this, props);
		this.state = _storesDropZoneStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(DropZone, [{
		key: 'onDrop',
		value: function onDrop(files) {
			_actionsDropZoneActions2['default'].removeWarning();
			if (files[0].type != "application/pdf" && files[0].type != "image/jpeg") {
				_actionsDropZoneActions2['default'].invalidType();
			} else {
				_actionsDropZoneActions2['default'].uploadDocument({
					file: files[0],
					router: this.context.router
				});
			}
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					_reactDropzone2['default'],
					{ onDrop: this.onDrop.bind(this), width: 300, height: 200, multiple: false, accept: '.jpg,.pdf,.jpeg' },
					_react2['default'].createElement(
						'div',
						null,
						'Try dropping some files here, or click to select files to upload.'
					)
				),
				_react2['default'].createElement(
					'p',
					{ style: { color: 'red' }, className: 'help-block' },
					this.state.helpBlock
				)
			);
		}
	}]);

	return DropZone;
})(_react2['default'].Component);

DropZone.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = DropZone;
module.exports = exports['default'];

},{"../actions/DropZoneActions":4,"../stores/DropZoneStore":34,"react":"react","react-dropzone":38}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var FAQ = (function (_React$Component) {
	_inherits(FAQ, _React$Component);

	function FAQ() {
		_classCallCheck(this, FAQ);

		_get(Object.getPrototypeOf(FAQ.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(FAQ, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row faqs' },
					_react2['default'].createElement(
						'div',
						{ className: 'headerFaq' },
						_react2['default'].createElement(
							'label',
							null,
							'Frequentely Asked Questions'
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'questionTitle' },
						_react2['default'].createElement(
							'label',
							null,
							'About ',
							_react2['default'].createElement(
								'span',
								null,
								'On The House'
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'panel-group', id: 'accordion', role: 'tablist', 'aria-multiselectable': 'true' },
						_react2['default'].createElement(
							'div',
							{ className: 'panel panel-default' },
							_react2['default'].createElement(
								'div',
								{ className: 'panel-heading', role: 'tab', id: 'headingOne' },
								_react2['default'].createElement(
									'h4',
									{ className: 'panel-title' },
									_react2['default'].createElement(
										'a',
										{ role: 'button', 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapseOne', 'aria-expanded': 'true', 'aria-controls': 'collapseOne' },
										_react2['default'].createElement('div', { className: 'circleFaq' }),
										'What is on the hOuse?'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ id: 'collapseOne', className: 'panel-collapse collapse in', role: 'tabpanel', 'aria-labelledby': 'headingOne' },
								_react2['default'].createElement(
									'div',
									{ className: 'panel-body' },
									'An initiative from CF, where the seeker who has newly shortlisted and bought or rented a property through CF will be able to select the discount offers from our select branded partners in Home Improvement, Furniture, Furnishings , Home loan, Electronics space.'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'panel panel-default' },
							_react2['default'].createElement(
								'div',
								{ className: 'panel-heading', role: 'tab', id: 'headingTwo' },
								_react2['default'].createElement(
									'h4',
									{ className: 'panel-title' },
									_react2['default'].createElement(
										'a',
										{ className: 'collapsed', role: 'button', 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapseTwo', 'aria-expanded': 'false', 'aria-controls': 'collapseTwo' },
										_react2['default'].createElement('div', { className: 'circleFaq' }),
										'House Does it work?'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ id: 'collapseTwo', className: 'panel-collapse collapse', role: 'tabpanel', 'aria-labelledby': 'headingTwo' },
								_react2['default'].createElement(
									'div',
									{ className: 'panel-body' },
									'When you find your house on CF, come to the OTH home page and give us the property details. Once it is verified, we would like to say thanks by offering discount coupons for your new home.'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'panel panel-default' },
							_react2['default'].createElement(
								'div',
								{ className: 'panel-heading', role: 'tab', id: 'headingThree' },
								_react2['default'].createElement(
									'h4',
									{ className: 'panel-title' },
									_react2['default'].createElement(
										'a',
										{ className: 'collapsed', role: 'button', 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapseThree', 'aria-expanded': 'false', 'aria-controls': 'collapseThree' },
										_react2['default'].createElement('div', { className: 'circleFaq' }),
										'Do i need to register to claim the coupons?'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ id: 'collapseThree', className: 'panel-collapse collapse', role: 'tabpanel', 'aria-labelledby': 'headingThree' },
								_react2['default'].createElement(
									'div',
									{ className: 'panel-body' },
									'Yes, you must have an existing account to claim these coupon codes. You can also sign in from Facebook or Google+ account.'
								)
							)
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return FAQ;
})(_react2['default'].Component);

exports['default'] = FAQ;
module.exports = exports['default'];

},{"./Footer":19,"./Header":21,"react":"react"}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FBLogin = (function (_React$Component) {
	_inherits(FBLogin, _React$Component);

	function FBLogin() {
		_classCallCheck(this, FBLogin);

		_get(Object.getPrototypeOf(FBLogin.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(FBLogin, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "col-md-6" },
				_react2["default"].createElement(
					"center",
					null,
					_react2["default"].createElement(
						"div",
						{ className: "socialLogin" },
						_react2["default"].createElement("img", { src: "img/fb.png" }),
						_react2["default"].createElement("img", { src: "img/gp.png" }),
						_react2["default"].createElement(
							"span",
							null,
							"Don’t worry we won’t post anything without your permission"
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "socialLoginMobile" },
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement(
								"div",
								{ className: "row" },
								_react2["default"].createElement(
									"div",
									{ className: "col-xs-6" },
									_react2["default"].createElement("img", { src: "img/mobileFb.png" })
								),
								_react2["default"].createElement(
									"div",
									{ className: "col-xs-6" },
									_react2["default"].createElement("img", { src: "img/mobileG.png" })
								)
							),
							_react2["default"].createElement(
								"div",
								{ className: "row permissopnMobile" },
								_react2["default"].createElement(
									"span",
									null,
									"Don’t worry we won’t post anything without your permission"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return FBLogin;
})(_react2["default"].Component);

exports["default"] = FBLogin;
module.exports = exports["default"];

},{"react":"react"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var Footer = (function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer() {
		_classCallCheck(this, Footer);

		_get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Footer, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'row OthFooterSection' },
				_react2['default'].createElement(
					'center',
					null,
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 col-xs-12 footer1' },
						_react2['default'].createElement(
							'ul',
							null,
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/faq' },
									'FAQs'
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/privacypolicy' },
									'Privacy Policy'
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/howtoavail' },
									'How To Avail'
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/contact' },
									'Contact'
								)
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 col-sm-12 footer2' },
						_react2['default'].createElement(
							'div',
							null,
							'Copyright © 2007-15 ',
							_react2['default'].createElement(
								'a',
								{ target: '_blank', href: 'http://www.commonfloor.com', style: { color: "#f68121" } },
								'CommonFloor.com'
							),
							'   All rights reserved.'
						)
					)
				)
			);
		}
	}]);

	return Footer;
})(_react2['default'].Component);

exports['default'] = Footer;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsLoginFormActions = require('../actions/LoginFormActions');

var _actionsLoginFormActions2 = _interopRequireDefault(_actionsLoginFormActions);

var _storesLoginFormStore = require('../stores/LoginFormStore');

var _storesLoginFormStore2 = _interopRequireDefault(_storesLoginFormStore);

var FormLogin = (function (_React$Component) {
	_inherits(FormLogin, _React$Component);

	function FormLogin(props) {
		_classCallCheck(this, FormLogin);

		_get(Object.getPrototypeOf(FormLogin.prototype), 'constructor', this).call(this, props);
		this.state = _storesLoginFormStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
		console.log('running');
	}

	_createClass(FormLogin, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesLoginFormStore2['default'].listen(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			console.log('hey ho');
			this.setState(state);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {

			var email = this.state.email.trim();
			var password = this.state.password;

			if (!email) {
				_actionsLoginFormActions2['default'].invalidEmail();
			}

			if (!password) {
				_actionsLoginFormActions2['default'].invalidPassword();
			}

			if (email && password) {
				_actionsLoginFormActions2['default'].login({
					email: email,
					password: password,
					router: this.context.router
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesLoginFormStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'handleSignUpRedirect',
		value: function handleSignUpRedirect() {
			_actionsLoginFormActions2['default'].signUp({ router: this.context.router });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'col-md-6 l' },
				_react2['default'].createElement(
					'div',
					{ className: 'loginForm' },
					_react2['default'].createElement(
						'div',
						{ className: 'loginFormWrap' },
						_react2['default'].createElement(
							'p',
							{ style: { color: 'red' }, className: 'help-block' },
							this.state.helpBlock
						),
						_react2['default'].createElement('input', { type: 'text', placeholder: 'Email id', value: this.state.email, onChange: _actionsLoginFormActions2['default'].updateEmail }),
						_react2['default'].createElement('input', { type: 'password', placeholder: 'password', value: this.state.password, onChange: _actionsLoginFormActions2['default'].updatePassword })
					),
					_react2['default'].createElement(
						'span',
						null,
						_react2['default'].createElement(
							'a',
							{ className: 'fp', href: '' },
							'Forgot Password?'
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'row' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-6 col-sm-6 signIn' },
							_react2['default'].createElement('input', { type: 'button', value: 'Sign In', onClick: this.handleSubmit.bind(this) }),
							_react2['default'].createElement(
								'span',
								null,
								'*mandatory fields'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-6 col-sm-6 signUp' },
							_react2['default'].createElement('input', { className: 'pull-right', type: 'button', value: 'Sign Up', onClick: this.handleSignUpRedirect.bind(this) }),
							_react2['default'].createElement(
								'span',
								null,
								'not registered yet?'
							)
						)
					),
					_react2['default'].createElement('div', { className: 'mandy' })
				)
			);
		}
	}]);

	return FormLogin;
})(_react2['default'].Component);

FormLogin.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = FormLogin;
module.exports = exports['default'];

},{"../actions/LoginFormActions":5,"../stores/LoginFormStore":35,"react":"react"}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Header = (function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		_get(Object.getPrototypeOf(Header.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "row OthHeaderSection" },
				_react2["default"].createElement(
					"div",
					{ className: "header1" },
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-6 col-md-6" },
						_react2["default"].createElement(
							"div",
							{ className: "col-sm-12 imgLogoWrap" },
							_react2["default"].createElement("img", { src: "img/oth_logo.jpg", style: { width: 35 + "%" } })
						)
					),
					_react2["default"].createElement("div", { className: "col-md-6 col-sm-6" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "borderHeader" },
					_react2["default"].createElement("div", { className: "col-md-6 col-xs-6 orange" }),
					_react2["default"].createElement("div", { className: "col-md-6 col-xs-6 brown" })
				),
				_react2["default"].createElement("div", { className: "header2 " })
			);
		}
	}]);

	return Header;
})(_react2["default"].Component);

exports["default"] = Header;
module.exports = exports["default"];

},{"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _HomeCompanyLogos = require('./HomeCompanyLogos');

var _HomeCompanyLogos2 = _interopRequireDefault(_HomeCompanyLogos);

var _reactRouter = require('react-router');

var Home = (function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid ' },
				_react2['default'].createElement(
					'div',
					{ className: 'row homePage' },
					_react2['default'].createElement(
						'div',
						{ className: 'hpWrap' },
						_react2['default'].createElement('img', { className: 'bgImage img-responsive', src: 'img/Background.jpg' }),
						_react2['default'].createElement(
							'div',
							{ className: 'onTopHomeImage' },
							_react2['default'].createElement(
								'center',
								null,
								_react2['default'].createElement(
									'div',
									{ className: 'onTopHomeImageContent' },
									_react2['default'].createElement(
										'label',
										null,
										'Found a house via CommonFloor?',
										_react2['default'].createElement(
											'span',
											{ className: 'tagline' },
											'A whole bunch of free house warming gifts await you!'
										)
									),
									_react2['default'].createElement('img', { className: 'othLogo', src: 'img/oth_logo1.png' }),
									_react2['default'].createElement(
										'label',
										{ className: 'poweredBy' },
										' Powered By'
									),
									_react2['default'].createElement('img', { src: 'img/cf_logo.png' })
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'companyLogosMobile' },
								_react2['default'].createElement(_HomeCompanyLogos2['default'], null)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'circleHome' },
								_react2['default'].createElement(
									'center',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '#HowTo' },
										_react2['default'].createElement('img', { src: 'img/circleH.png' })
									)
								)
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'companyLogos' },
						_react2['default'].createElement(_HomeCompanyLogos2['default'], null)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'howToavail', id: 'HowTo' },
						_react2['default'].createElement(
							'div',
							{ className: 'availHeader' },
							'Heres how to avail your gifts',
							_react2['default'].createElement('div', { className: 'col-md-6 col-xs-6 orange' }),
							_react2['default'].createElement('div', { className: 'col-md-6 col-xs-6 brown' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-12 col-md-6 tiles' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-3' },
								_react2['default'].createElement('img', { className: 'img-responsive', src: 'img/claimNow.png' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-9 text' },
								'Go to "Claim Now" & submit your property details and documents'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-12 col-md-6  tiles' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-3' },
								_react2['default'].createElement('img', { className: 'img-responsive', src: 'img/browse.png' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-9 text' },
								'Browse through the list of free offers'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-12 col-md-6  tiles' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-3' },
								_react2['default'].createElement('img', { className: 'img-responsive', src: 'img/cart.png' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-9 text' },
								'Add the free offers you like to your cart & checkout'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-12 col-md-6  tiles' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-3' },
								_react2['default'].createElement('img', { className: 'img-responsive', src: 'img/post.png' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-9 text' },
								'Post-verification (max 1 - 2 working days), you will receive the discount codes'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-12 aruready' },
							_react2['default'].createElement(
								'center',
								null,
								_react2['default'].createElement(
									'label',
									null,
									'Are you ready?'
								),
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/login' },
									'Claim Now'
								)
							)
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"./Footer":19,"./HomeCompanyLogos":23,"react":"react","react-router":"react-router"}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var HomeCompanyLogos = (function (_React$Component) {
	_inherits(HomeCompanyLogos, _React$Component);

	function HomeCompanyLogos() {
		_classCallCheck(this, HomeCompanyLogos);

		_get(Object.getPrototypeOf(HomeCompanyLogos.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(HomeCompanyLogos, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"center",
				null,
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-12 col-md-2 partners" },
					"Partner:"
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-3 col-md-2" },
					_react2["default"].createElement("img", { className: "img-responsive", src: "img/ulLogo.png" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-3 col-md-2" },
					_react2["default"].createElement("img", { className: "img-responsive", src: "img/homelane.png" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-3 col-md-2" },
					_react2["default"].createElement("img", { className: "img-responsive", src: "img/furlenco.png" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-3 col-md-2 hdfc" },
					_react2["default"].createElement("img", { className: "img-responsive", src: "img/hdfc.png" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-12 col-md-2 viewMore" },
					_react2["default"].createElement(
						"a",
						{ href: "" },
						"View more offers>>"
					)
				)
			);
		}
	}]);

	return HomeCompanyLogos;
})(_react2["default"].Component);

exports["default"] = HomeCompanyLogos;
module.exports = exports["default"];

},{"react":"react"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _FBLogin = require('./FBLogin');

var _FBLogin2 = _interopRequireDefault(_FBLogin);

var _FormLogin = require('./FormLogin');

var _FormLogin2 = _interopRequireDefault(_FormLogin);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var Login = (function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login() {
		_classCallCheck(this, Login);

		_get(Object.getPrototypeOf(Login.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid loginPage' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row othLogin' },
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 loginhead' },
						'Sign in to edit your availed offers!'
					),
					_react2['default'].createElement(_FBLogin2['default'], null),
					_react2['default'].createElement(_FormLogin2['default'], null)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return Login;
})(_react2['default'].Component);

exports['default'] = Login;
module.exports = exports['default'];

},{"./FBLogin":18,"./Footer":19,"./FormLogin":20,"./Header":21,"react":"react"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _FBLogin = require('./FBLogin');

var _FBLogin2 = _interopRequireDefault(_FBLogin);

var _SignUpForm = require('./SignUpForm');

var _SignUpForm2 = _interopRequireDefault(_SignUpForm);

var SignUp = (function (_React$Component) {
	_inherits(SignUp, _React$Component);

	function SignUp() {
		_classCallCheck(this, SignUp);

		_get(Object.getPrototypeOf(SignUp.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(SignUp, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid loginPage registerPage' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row othLogin' },
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 loginhead' },
						'Sign up to claim your free offer!'
					),
					_react2['default'].createElement(_FBLogin2['default'], null),
					_react2['default'].createElement(_SignUpForm2['default'], null)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return SignUp;
})(_react2['default'].Component);

exports['default'] = SignUp;
module.exports = exports['default'];

},{"./FBLogin":18,"./Footer":19,"./Header":21,"./SignUpForm":26,"react":"react"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsSignUpFormActions = require('../actions/SignUpFormActions');

var _actionsSignUpFormActions2 = _interopRequireDefault(_actionsSignUpFormActions);

var _storesSignUpFormStore = require('../stores/SignUpFormStore');

var _storesSignUpFormStore2 = _interopRequireDefault(_storesSignUpFormStore);

var SignUpForm = (function (_React$Component) {
	_inherits(SignUpForm, _React$Component);

	function SignUpForm(props) {
		_classCallCheck(this, SignUpForm);

		_get(Object.getPrototypeOf(SignUpForm.prototype), 'constructor', this).call(this, props);
		this.state = _storesSignUpFormStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(SignUpForm, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesSignUpFormStore2['default'].listen(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {
			var name = this.state.username.trim();
			var email = this.state.email.trim();
			var password = this.state.password;
			var number = this.state.number;

			if (!name) {
				_actionsSignUpFormActions2['default'].invalidUsername();
				this.ref.nameTextField.getDOMNode().focus();
			}

			if (!email) {
				_actionsSignUpFormActions2['default'].invalidEmail();
				this.refs.emailTextField.getDOMNode().focus();
			}

			if (!password) {
				_actionsSignUpFormActions2['default'].invalidPassword();
				this.ref.passwordTextField.getDOMNode().focus();
			}

			if (!number) {
				_actionsSignUpFormActions2['default'].invalidNumber();
				this.ref.numberTextField.getDOMNode().focus();
			}

			if (email && password && number && name) {
				_actionsSignUpFormActions2['default'].signup({
					name: name,
					email: email,
					password: password,
					number: number,
					router: this.context.router
				});
			}
		}
	}, {
		key: 'handleLoginRedirect',
		value: function handleLoginRedirect() {
			_actionsSignUpFormActions2['default'].login({ router: this.context.router });
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesSignUpFormStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'col-md-6 l' },
				_react2['default'].createElement(
					'div',
					{ className: 'loginForm' },
					_react2['default'].createElement(
						'div',
						{ className: 'loginFormWrap' },
						_react2['default'].createElement(
							'p',
							{ style: { color: 'red' }, className: 'help-block' },
							this.state.helpBlock
						),
						_react2['default'].createElement('input', { type: 'text', ref: 'nameTextField', placeholder: 'Full Name', value: this.state.username, onChange: _actionsSignUpFormActions2['default'].updateUsername }),
						_react2['default'].createElement('input', { type: 'email', ref: 'emailTextField', placeholder: 'Email id', value: this.state.email, onChange: _actionsSignUpFormActions2['default'].updateEmail }),
						_react2['default'].createElement('input', { type: 'password', ref: 'passwordTextField', placeholder: 'password', value: this.state.password, onChange: _actionsSignUpFormActions2['default'].updatePassword }),
						_react2['default'].createElement('input', { type: 'text', ref: 'numberTextField', placeholder: 'Mobile No', value: this.state.number, onChange: _actionsSignUpFormActions2['default'].updateNumber })
					),
					_react2['default'].createElement(
						'div',
						{ className: 'row' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-6 col-sm-6 signIn' },
							_react2['default'].createElement('input', { type: 'button', value: 'Sign Up', onClick: this.handleSubmit.bind(this) }),
							_react2['default'].createElement(
								'span',
								null,
								'*mandatory fields'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-6 col-sm-6 signUp' },
							_react2['default'].createElement('input', { className: 'pull-right', type: 'button', value: 'Sign In', onClick: this.handleLoginRedirect.bind(this) }),
							_react2['default'].createElement(
								'span',
								null,
								'Already registered?'
							)
						)
					),
					_react2['default'].createElement('div', { className: 'mandy' })
				)
			);
		}
	}]);

	return SignUpForm;
})(_react2['default'].Component);

SignUpForm.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = SignUpForm;
module.exports = exports['default'];

},{"../actions/SignUpFormActions":6,"../stores/SignUpFormStore":36,"react":"react"}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Status = (function (_React$Component) {
	_inherits(Status, _React$Component);

	function Status(props) {
		_classCallCheck(this, Status);

		_get(Object.getPrototypeOf(Status.prototype), 'constructor', this).call(this, props);
		console.log(props);
		console.log('hello');
	}

	_createClass(Status, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement('div', null);
		}
	}]);

	return Status;
})(_react2['default'].Component);

exports['default'] = Status;
module.exports = exports['default'];

},{"react":"react"}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _AdminHeader = require('./AdminHeader');

var _AdminHeader2 = _interopRequireDefault(_AdminHeader);

var _Status = require('./Status');

var _Status2 = _interopRequireDefault(_Status);

var _actionsVerificationActions = require('../actions/VerificationActions');

var _actionsVerificationActions2 = _interopRequireDefault(_actionsVerificationActions);

var _storesVerificationStore = require('../stores/VerificationStore');

var _storesVerificationStore2 = _interopRequireDefault(_storesVerificationStore);

var Verification = (function (_React$Component) {
	_inherits(Verification, _React$Component);

	function Verification() {
		_classCallCheck(this, Verification);

		_get(Object.getPrototypeOf(Verification.prototype), 'constructor', this).call(this);
		this.state = _storesVerificationStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
		console.log('i jsut ran');
	}

	_createClass(Verification, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesVerificationStore2['default'].listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesVerificationStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleClick',
		value: function handleClick(data) {
			_actionsVerificationActions2['default'].getUserWithStatus({
				status: data
			});
		}
	}, {
		key: 'render',
		value: function render() {

			var res = this.state.results.map(function (request, i) {
				return _react2['default'].createElement(
					'div',
					{ className: 'mainContent', key: i },
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12', style: { "paddingTop": 10 + "px" } },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3 col-md-3 col1Contact' },
							_react2['default'].createElement(
								'div',
								{ className: 'name' },
								request.user
							),
							_react2['default'].createElement(
								'div',
								null,
								_react2['default'].createElement('i', { className: 'fa fa-phone' }),
								request.number
							),
							_react2['default'].createElement(
								'div',
								null,
								_react2['default'].createElement('i', { className: 'fa fa-envelope' }),
								request.email
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-4 col-md-4 col2Contact' },
							_react2['default'].createElement(
								'div',
								null,
								'Documet:',
								_react2['default'].createElement(
									'a',
									{ href: '' },
									'Property Agreement'
								)
							),
							_react2['default'].createElement(
								'div',
								null,
								'Broker Name:',
								_react2['default'].createElement(
									'span',
									null,
									request.commonfloorContactName
								)
							),
							_react2['default'].createElement(
								'div',
								null,
								_react2['default'].createElement('i', { className: 'fa fa-phone' }),
								request.commonfloorContactNumber
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3 col-md-3 col3Contact' },
							_react2['default'].createElement(
								'div',
								null,
								'Property:',
								_react2['default'].createElement(
									'span',
									null,
									request.type
								)
							),
							_react2['default'].createElement(
								'div',
								null,
								'Offers Availed:',
								_react2['default'].createElement(
									'span',
									null,
									'\'yet to set\''
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-2 col-md-2' },
							_react2['default'].createElement('input', { className: 'failedBtn pull-right', type: 'button', disabled: true })
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 commentWrap' },
						_react2['default'].createElement(
							'div',
							{ className: 'comment col-md-10 col-xs-10' },
							_react2['default'].createElement('img', { src: 'img/comment.png' }),
							' Last Comment:',
							_react2['default'].createElement(
								'span',
								null,
								'\'yet to set\''
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-2 col-xs-2  viewMore pull-right' },
							_react2['default'].createElement(
								'a',
								{ href: '', className: 'pull-right' },
								'View More'
							)
						)
					)
				);
			});

			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid' },
				_react2['default'].createElement(_AdminHeader2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row contentArea' },
					_react2['default'].createElement(
						'div',
						{ className: 'contentMargin' },
						_react2['default'].createElement(
							'ul',
							null,
							_react2['default'].createElement(
								'li',
								{ className: this.state.page === "pending" ? "active" : "", onClick: this.handleClick.bind(this, "pending") },
								'Pending Requests'
							),
							_react2['default'].createElement(
								'li',
								{ className: this.state.page === "verified" ? "active" : "", onClick: this.handleClick.bind(this, "verified") },
								'Verified Requests'
							),
							_react2['default'].createElement(
								'li',
								{ className: this.state.page === "failed" ? "active" : "", onClick: this.handleClick.bind(this, "failed") },
								'Failed Requests'
							)
						),
						res
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return Verification;
})(_react2['default'].Component);

exports['default'] = Verification;
module.exports = exports['default'];

},{"../actions/VerificationActions":7,"../stores/VerificationStore":37,"./AdminHeader":10,"./Footer":19,"./Status":27,"react":"react"}],29:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":30,"react":"react","react-router":"react-router"}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsLogin = require('./components/Login');

var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

var _componentsCart = require('./components/Cart');

var _componentsCart2 = _interopRequireDefault(_componentsCart);

var _componentsSignUp = require('./components/SignUp');

var _componentsSignUp2 = _interopRequireDefault(_componentsSignUp);

var _componentsFAQ = require('./components/FAQ');

var _componentsFAQ2 = _interopRequireDefault(_componentsFAQ);

var _componentsAboutHome = require('./components/AboutHome');

var _componentsAboutHome2 = _interopRequireDefault(_componentsAboutHome);

var _componentsDocumentation = require('./components/Documentation');

var _componentsDocumentation2 = _interopRequireDefault(_componentsDocumentation);

var _componentsCFContact = require('./components/CFContact');

var _componentsCFContact2 = _interopRequireDefault(_componentsCFContact);

var _componentsAdminOffer = require('./components/AdminOffer');

var _componentsAdminOffer2 = _interopRequireDefault(_componentsAdminOffer);

var _componentsVerification = require('./components/Verification');

var _componentsVerification2 = _interopRequireDefault(_componentsVerification);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/login', handler: _componentsLogin2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/cart', handler: _componentsCart2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/signup', handler: _componentsSignUp2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/faq', handler: _componentsFAQ2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/aboutyourhome', handler: _componentsAboutHome2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/document', handler: _componentsDocumentation2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/cfcontact', handler: _componentsCFContact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/adminoffer', handler: _componentsAdminOffer2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/verification', handler: _componentsVerification2['default'] })
);
module.exports = exports['default'];

},{"./components/AboutHome":9,"./components/AdminOffer":11,"./components/App":12,"./components/CFContact":13,"./components/Cart":14,"./components/Documentation":15,"./components/FAQ":17,"./components/Home":22,"./components/Login":24,"./components/SignUp":25,"./components/Verification":28,"react":"react","react-router":"react-router"}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsAboutHomeActions = require('../actions/AboutHomeActions');

var _actionsAboutHomeActions2 = _interopRequireDefault(_actionsAboutHomeActions);

var AboutHomeStore = (function () {
	function AboutHomeStore() {
		_classCallCheck(this, AboutHomeStore);

		this.bindActions(_actionsAboutHomeActions2['default']);
		this.name = '';
		this.list1 = '';
		this.list2 = '';
		this.city = '';
		this.state = '';
		this.pincode = '';
		this.helpBlock = '';
		this.type = 0;
	}

	_createClass(AboutHomeStore, [{
		key: 'onRegisterSuccess',
		value: function onRegisterSuccess(redirect) {
			redirect.router.transitionTo('/document');
		}
	}, {
		key: 'onSelectType',
		value: function onSelectType() {
			this.type = !this.type;
		}
	}, {
		key: 'onGetName',
		value: function onGetName(payload) {
			this.name = payload.message;
		}
	}, {
		key: 'onUpdateLine1',
		value: function onUpdateLine1(event) {
			this.helpBlock = '';
			this.line1 = event.target.value;
		}
	}, {
		key: 'onUpdateLine2',
		value: function onUpdateLine2(event) {
			this.helpBlock = '';
			this.line2 = event.target.value;
		}
	}, {
		key: 'onUpdateCity',
		value: function onUpdateCity(event) {
			this.helpBlock = '';
			this.city = event.target.value;
		}
	}, {
		key: 'onUpdateState',
		value: function onUpdateState(event) {
			this.helpBlock = '';
			this.state = event.target.value;
		}
	}, {
		key: 'onUpdatePincode',
		value: function onUpdatePincode(event) {
			this.helpBlock = '';
			this.pincode = event.target.value;
		}
	}, {
		key: 'onInvalidLine1',
		value: function onInvalidLine1() {
			this.helpBlock = 'Please Enter Address Line 1';
		}
	}, {
		key: 'onInvalidLine2',
		value: function onInvalidLine2() {
			this.helpBlock = 'Please Enter Address Line 2';
		}
	}, {
		key: 'onInvalidCity',
		value: function onInvalidCity() {
			this.helpBlock = 'Please Enter City';
		}
	}, {
		key: 'onInvalidState',
		value: function onInvalidState() {
			this.helpBlock = 'Please Enter State';
		}
	}, {
		key: 'onInvalidPincode',
		value: function onInvalidPincode() {
			this.helpBlock = 'Please Enter a Pincode';
		}
	}, {
		key: 'onRegisterFail',
		value: function onRegisterFail(errorMessage) {
			this.helpBlock = errorMessage;
		}
	}]);

	return AboutHomeStore;
})();

exports['default'] = _alt2['default'].createStore(AboutHomeStore);
module.exports = exports['default'];

},{"../actions/AboutHomeActions":1,"../alt":8}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsAdminHeaderActions = require('../actions/AdminHeaderActions');

var _actionsAdminHeaderActions2 = _interopRequireDefault(_actionsAdminHeaderActions);

var AdminHeaderStore = (function () {
	function AdminHeaderStore() {
		_classCallCheck(this, AdminHeaderStore);

		this.bindActions(_actionsAdminHeaderActions2['default']);
	}

	_createClass(AdminHeaderStore, [{
		key: 'onRedirectToVerification',
		value: function onRedirectToVerification(redirect) {
			redirect.router.transitionTo('/adminpendingrequest');
		}
	}, {
		key: 'onRedirectToOffer',
		value: function onRedirectToOffer(redirect) {
			redirect.router.transitionTo('/adminoffer');
		}
	}]);

	return AdminHeaderStore;
})();

exports['default'] = _alt2['default'].createStore(AdminHeaderStore);
module.exports = exports['default'];

},{"../actions/AdminHeaderActions":2,"../alt":8}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsCFContactActions = require('../actions/CFContactActions');

var _actionsCFContactActions2 = _interopRequireDefault(_actionsCFContactActions);

var CFContactStore = (function () {
	function CFContactStore() {
		_classCallCheck(this, CFContactStore);

		this.bindActions(_actionsCFContactActions2['default']);
		this.name = '';
		this.phone = '';
		this.contactType = 'owner';
		this.helpBlock = '';
	}

	_createClass(CFContactStore, [{
		key: 'onInvalidName',
		value: function onInvalidName() {
			this.helpBlock = 'Please Enter a Name';
		}
	}, {
		key: 'onInvalidPhone',
		value: function onInvalidPhone() {
			this.helpBlock = 'Please Enter a Phone Number';
		}
	}, {
		key: 'onUpdateCFContactName',
		value: function onUpdateCFContactName(event) {
			this.helpBlock = '';
			this.name = event.target.value;
		}
	}, {
		key: 'onUpdateCFContactPhone',
		value: function onUpdateCFContactPhone(event) {
			this.helpBlock = '';
			this.phone = event.target.value;
		}
	}, {
		key: 'onUpdateCFContactType',
		value: function onUpdateCFContactType(event) {
			this.helpBlock = '';
			this.contactType = event.target.value;
		}
	}, {
		key: 'onUpdateFail',
		value: function onUpdateFail() {
			this.helpBlock = 'Some Error Occured';
		}
	}, {
		key: 'onUpdateSuccess',
		value: function onUpdateSuccess(redirect) {
			redirect.router.transitionTo('/cart');
		}
	}]);

	return CFContactStore;
})();

exports['default'] = _alt2['default'].createStore(CFContactStore);
module.exports = exports['default'];

},{"../actions/CFContactActions":3,"../alt":8}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsDropZoneActions = require('../actions/DropZoneActions');

var _actionsDropZoneActions2 = _interopRequireDefault(_actionsDropZoneActions);

var DropZoneStore = (function () {
	function DropZoneStore() {
		_classCallCheck(this, DropZoneStore);

		this.bindActions(_actionsDropZoneActions2['default']);
		this.helpBlock = '';
		this.uploded = false;
	}

	_createClass(DropZoneStore, [{
		key: 'onRemoveWarning',
		value: function onRemoveWarning() {
			this.helpBlock = '';
		}
	}, {
		key: 'onInvalidType',
		value: function onInvalidType() {
			this.helpBlock = 'Invalid File Type only PDFs and JPEGs are allowed';
		}
	}, {
		key: 'onUploadSuccess',
		value: function onUploadSuccess(redirect) {
			redirect.router.transitionTo('/cfcontact');
		}
	}, {
		key: 'onUploadFail',
		value: function onUploadFail() {
			this.helpBlock = 'Some Error Occured';
		}
	}]);

	return DropZoneStore;
})();

exports['default'] = _alt2['default'].createStore(DropZoneStore);
module.exports = exports['default'];

},{"../actions/DropZoneActions":4,"../alt":8}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsLoginFormActions = require('../actions/LoginFormActions');

var _actionsLoginFormActions2 = _interopRequireDefault(_actionsLoginFormActions);

var LoginFormStore = (function () {
	function LoginFormStore() {
		_classCallCheck(this, LoginFormStore);

		this.bindActions(_actionsLoginFormActions2['default']);
		this.email = '';
		this.password = '';
		this.helpBlock = '';
	}

	_createClass(LoginFormStore, [{
		key: 'onLoginFormSuccess',
		value: function onLoginFormSuccess(successData) {
			if ("admin" == successData.message.role) {
				successData.router.transitionTo('/verification');
			} else if ("user" == successData.message.role) {
				if (false == successData.message.propertyRegistered) {
					successData.router.transitionTo('/aboutyourhome');
				} else if (true == successData.message.propertyRegistered) {
					successData.router.transitionTo('/cart');
				}
			}
		}
	}, {
		key: 'onLoginFormFail',
		value: function onLoginFormFail(errorMessage) {
			this.helpBlock = errorMessage;
		}
	}, {
		key: 'onInvalidEmail',
		value: function onInvalidEmail() {
			this.helpBlock = 'Please Enter an Email id';
		}
	}, {
		key: 'onInvalidPassword',
		value: function onInvalidPassword() {
			this.helpBlock = 'Please Enter a Password';
		}
	}, {
		key: 'onUpdateEmail',
		value: function onUpdateEmail(event) {
			this.helpBlock = '';
			this.email = event.target.value;
		}
	}, {
		key: 'onUpdatePassword',
		value: function onUpdatePassword(event) {
			this.helpBlock = '';
			this.password = event.target.value;
		}
	}, {
		key: 'onSignUp',
		value: function onSignUp(redirect) {
			redirect.router.transitionTo('/signup');
		}
	}]);

	return LoginFormStore;
})();

exports['default'] = _alt2['default'].createStore(LoginFormStore);
module.exports = exports['default'];

},{"../actions/LoginFormActions":5,"../alt":8}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsSignUpFormActions = require('../actions/SignUpFormActions');

var _actionsSignUpFormActions2 = _interopRequireDefault(_actionsSignUpFormActions);

var SignUpFormStore = (function () {
	function SignUpFormStore() {
		_classCallCheck(this, SignUpFormStore);

		this.bindActions(_actionsSignUpFormActions2['default']);
		this.email = '';
		this.password = '';
		this.number = '';
		this.username = '';
		this.helpBlock = '';
	}

	_createClass(SignUpFormStore, [{
		key: 'onSignUpFormSuccess',
		value: function onSignUpFormSuccess(successData) {
			successData.router.transitionTo('/login');
		}
	}, {
		key: 'onSignUpFormFail',
		value: function onSignUpFormFail(errorMessage) {
			this.helpBlock = errorMessage;
		}
	}, {
		key: 'onInvalidEmail',
		value: function onInvalidEmail() {
			this.helpBlock = 'Please Enter an Email id';
		}
	}, {
		key: 'onInvalidPassword',
		value: function onInvalidPassword() {
			this.helpBlock = 'Please Enter a Password';
		}
	}, {
		key: 'onInvalidNumber',
		value: function onInvalidNumber() {
			this.helpBlock = 'Please Enter a Number';
		}
	}, {
		key: 'onInvalidUsername',
		value: function onInvalidUsername() {
			this.helpBlock = 'Please Enter a Name';
		}
	}, {
		key: 'onUpdateEmail',
		value: function onUpdateEmail(event) {
			this.helpBlock = '';
			this.email = event.target.value;
		}
	}, {
		key: 'onUpdatePassword',
		value: function onUpdatePassword(event) {
			this.helpBlock = '';
			this.password = event.target.value;
		}
	}, {
		key: 'onUpdateUsername',
		value: function onUpdateUsername(event) {
			this.helpBlock = '';
			this.username = event.target.value;
		}
	}, {
		key: 'onUpdateNumber',
		value: function onUpdateNumber(event) {
			this.helpBlock = '';
			this.number = event.target.value;
		}
	}, {
		key: 'onLogin',
		value: function onLogin(redirect) {
			redirect.router.transitionTo('/login');
		}
	}]);

	return SignUpFormStore;
})();

exports['default'] = _alt2['default'].createStore(SignUpFormStore);
module.exports = exports['default'];

},{"../actions/SignUpFormActions":6,"../alt":8}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsVerificationActions = require('../actions/VerificationActions');

var _actionsVerificationActions2 = _interopRequireDefault(_actionsVerificationActions);

var VerificationStore = (function () {
	function VerificationStore() {
		_classCallCheck(this, VerificationStore);

		this.bindActions(_actionsVerificationActions2['default']);
		this.results = [];
		this.helpBlock = '';
	}

	_createClass(VerificationStore, [{
		key: 'onCallSuccess',
		value: function onCallSuccess(data) {
			this.results = data;
		}
	}, {
		key: 'onCallFail',
		value: function onCallFail(errMsg) {
			this.helpBlock = errMsg;
		}
	}]);

	return VerificationStore;
})();

exports['default'] = _alt2['default'].createStore(VerificationStore);
module.exports = exports['default'];

},{"../actions/VerificationActions":7,"../alt":8}],38:[function(require,module,exports){
var React = require('react');

var Dropzone = React.createClass({
  getDefaultProps: function() {
    return {
      supportClick: true,
      multiple: true
    };
  },

  getInitialState: function() {
    return {
      isDragActive: false
    };
  },

  propTypes: {
    onDrop: React.PropTypes.func.isRequired,
    onDragOver: React.PropTypes.func,
    onDragLeave: React.PropTypes.func,
    size: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    style: React.PropTypes.object,
    supportClick: React.PropTypes.bool,
    accept: React.PropTypes.string,
    multiple: React.PropTypes.bool
  },

  onDragLeave: function(e) {
    this.setState({
      isDragActive: false
    });

    if (this.props.onDragLeave) {
      this.props.onDragLeave(e);
    }
  },

  onDragOver: function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';

    // set active drag state only when file is dragged into
    // (in mozilla when file is dragged effect is "uninitialized")
    var effectAllowed = e.dataTransfer.effectAllowed;
    if (effectAllowed === 'all' || effectAllowed === 'uninitialized') {
      this.setState({
        isDragActive: true
      });
    }

    if (this.props.onDragOver) {
      this.props.onDragOver(e);
    }
  },

  onDrop: function(e) {
    e.preventDefault();

    this.setState({
      isDragActive: false
    });

    var files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    var maxFiles = (this.props.multiple) ? files.length : 1;
    for (var i = 0; i < maxFiles; i++) {
      files[i].preview = URL.createObjectURL(files[i]);
    }

    if (this.props.onDrop) {
      files = Array.prototype.slice.call(files, 0, maxFiles);
      this.props.onDrop(files, e);
    }
  },

  onClick: function () {
    if (this.props.supportClick === true) {
      this.open();
    }
  },

  open: function() {
    var fileInput = React.findDOMNode(this.refs.fileInput);
    fileInput.value = null;
    fileInput.click();
  },

  render: function() {
    var className = this.props.className || 'dropzone';
    if (this.state.isDragActive) {
      className += ' active';
    }

    var style = {};
    if (this.props.style) { // user-defined inline styles take priority
      style = this.props.style;
    } else if (!this.props.className) { // if no class or inline styles defined, use defaults
      style = {
        width: this.props.width || this.props.size || 100,
        height: this.props.height || this.props.size || 100,
        borderStyle: this.state.isDragActive ? 'solid' : 'dashed'
      };
    }

    return (
      React.createElement('div',
        {
          className: className,
          style: style,
          onClick: this.onClick,
          onDragLeave: this.onDragLeave,
          onDragOver: this.onDragOver,
          onDrop: this.onDrop
        },
        React.createElement('input',
          {
            style: { display: 'none' },
            type: 'file',
            multiple: this.props.multiple,
            ref: 'fileInput',
            onChange: this.onDrop,
            accept: this.props.accept
          }
        ),
        this.props.children
      )
    );
  }

});

module.exports = Dropzone;

},{"react":"react"}]},{},[29]);
