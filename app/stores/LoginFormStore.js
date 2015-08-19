import alt from '../alt';
import LoginFormActions from '../actions/LoginFormActions';

class LoginFormStore {
	constructor() {
		this.bindActions(LoginFormActions);
		this.email = '';
		this.password = '';
		this.helpBlock = '';
	}

	onLoginFormSuccess(successData) {
		if("admin" == successData.message.role) {
			successData.router.transitionTo('/verification');
		}
		else if("user" == successData.message.role) {
				if(false == successData.message.propertyRegistered) {
					successData.router.transitionTo('/aboutyourhome');
				}
				else if(true == successData.message.propertyRegistered) {
					successData.router.transitionTo('/cart');
				}
		}
	}

	onLoginFormFail(errorMessage) {
		this.helpBlock = errorMessage;
	}

	onInvalidEmail() {
		this.helpBlock = 'Please Enter an Email id';
	}

	onInvalidPassword() {
		this.helpBlock = 'Please Enter a Password';
	}

	onUpdateEmail(event) {
		this.helpBlock = '';
		this.email = event.target.value;
	}

	onUpdatePassword(event) {
		this.helpBlock = '';
		this.password = event.target.value;
	}

	onSignUp(redirect) {
		redirect.router.transitionTo('/signup');
	}
}

export default alt.createStore(LoginFormStore);