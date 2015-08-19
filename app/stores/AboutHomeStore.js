import alt from '../alt';
import AboutHomeActions from '../actions/AboutHomeActions';

class AboutHomeStore {
	constructor() {
		this.bindActions(AboutHomeActions);
		this.name = '';
		this.list1 = '';
		this.list2 = '';
		this.city = '';
		this.state = '';
		this.pincode = '';
		this.helpBlock = '';
		this.type = 0;
	}

	onRegisterSuccess(redirect) {
		redirect.router.transitionTo('/document');
	}

	onSelectType() {
		this.type = !this.type;
	}

	onGetName(payload) {
		this.name = payload.message;
	}

	onUpdateLine1(event) {
		this.helpBlock = '';
		this.line1 = event.target.value;
	}

	onUpdateLine2(event) {
		this.helpBlock = '';
		this.line2 = event.target.value;
	}

	onUpdateCity(event) {
		this.helpBlock = '';
		this.city = event.target.value;
	}

	onUpdateState(event) {
		this.helpBlock = '';
		this.state = event.target.value;
	}

	onUpdatePincode(event) {
		this.helpBlock = '';
		this.pincode = event.target.value;
	}

	onInvalidLine1() {
		this.helpBlock = 'Please Enter Address Line 1';
	}

	onInvalidLine2() {
		this.helpBlock = 'Please Enter Address Line 2';
	}

	onInvalidCity() {
		this.helpBlock = 'Please Enter City';
	}

	onInvalidState() {
		this.helpBlock = 'Please Enter State';
	}

	onInvalidPincode() {
		this.helpBlock = 'Please Enter a Pincode';
	}

	onRegisterFail(errorMessage) {
		this.helpBlock = errorMessage;
	}
}

export default alt.createStore(AboutHomeStore);