import alt from '../alt';
import {assign} from 'underscore';
class SignUpFormActions {
	constructor() {
		this.generateActions(
				'signUpFormSuccess',
				'signUpFormFail',
				'invalidEmail',
				'invalidPassword',
				'invalidNumber',
				'invalidUsername',
				'updateEmail',
				'updatePassword',
				'updateUsername',
				'updateNumber',
				'login'
			);
	}

	signup(credentials) {
		$.ajax({
			type: 'POST',
			url: '/register',
			data: {name: credentials.name, email: credentials.email, password: credentials.password, number: credentials.number}
		})
		  .done((data) => {
		  	if(false == data.register) {
		  		this.actions.signUpFormFail(data.message);
		  	}
		  	else {
		  		assign(credentials,data);
		  		this.actions.signUpFormSuccess(credentials);
		  	}
		  })
		  .fail((jqXhr) => {
		  	this.actions.signUpFormFail('Some error occured');
		  });
	}
}

export default alt.createActions(SignUpFormActions);