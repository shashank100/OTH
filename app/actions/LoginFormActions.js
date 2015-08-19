import alt from '../alt';
import {assign} from 'underscore';
class LoginFormActions {
	constructor() {
		this.generateActions(
				'loginFormSuccess',
				'loginFormFail',
				'invalidEmail',
				'invalidPassword',
				'updateEmail',
				'updatePassword',
				'signUp'
			);
	}

	login(credentials) {
		$.ajax({
			type: 'POST',
			url: '/authenticate',
			data: {email: credentials.email, password: credentials.password}
		})
		  .done((data) => {
		  	if(false == data.exist) {
		  		this.actions.loginFormFail(data.message);
		  	}
		  	else {
		  		assign(credentials,data);
		  		this.actions.loginFormSuccess(credentials);
		  	}
		  })
		  .fail((jqXhr) => {
		  	this.actions.loginFormFail('Some error occured');
		  });
	}
}

export default alt.createActions(LoginFormActions);