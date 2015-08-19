import alt from '../alt';
import SignUpFormActions from '../actions/SignUpFormActions';

class SignUpFormStore {
	constructor() {
		this.bindActions(SignUpFormActions);
		this.email = '';
		this.password = '';
		this.number = '';
		this.username = '';
		this.helpBlock = '';
	}

	onSignUpFormSuccess(successData) {
		successData.router.transitionTo('/login');
	}

	onSignUpFormFail(errorMessage) {
		this.helpBlock = errorMessage;
	}

	onInvalidEmail() {
		this.helpBlock = 'Please Enter an Email id';
	}

	onInvalidPassword() {
		this.helpBlock = 'Please Enter a Password';
	}

	onInvalidNumber() {
		this.helpBlock = 'Please Enter a Number';
	}

	onInvalidUsername() {
		this.helpBlock = 'Please Enter a Name';
	}

	onUpdateEmail(event) {
		this.helpBlock = '';
		this.email = event.target.value;
	}

	onUpdatePassword(event) {
		this.helpBlock = '';
		this.password = event.target.value;
	}

	onUpdateUsername(event) {
		this.helpBlock = '';
		this.username = event.target.value;
	}

	onUpdateNumber(event) {
		this.helpBlock = '';
		this.number = event.target.value;
	}

	onLogin(redirect) {
		redirect.router.transitionTo('/login');
	}
}

export default alt.createStore(SignUpFormStore);