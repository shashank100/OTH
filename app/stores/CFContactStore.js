import alt from '../alt';
import CFContactActions from '../actions/CFContactActions';

class CFContactStore {
	constructor() {
		this.bindActions(CFContactActions);
		this.name = '';
		this.phone = '';
		this.contactType = 'owner';
		this.helpBlock = '';
	}

	onInvalidName() {
		this.helpBlock = 'Please Enter a Name';
	}

	onInvalidPhone() {
		this.helpBlock = 'Please Enter a Phone Number';
	}

	onUpdateCFContactName(event) {
		this.helpBlock = '';
		this.name = event.target.value;
	}

	onUpdateCFContactPhone(event) {
		this.helpBlock = '';
		this.phone = event.target.value;
	}

	onUpdateCFContactType(event) {
		this.helpBlock = '';
		this.contactType = event.target.value;
	}

	onUpdateFail() {
		this.helpBlock = 'Some Error Occured';
	}

	onUpdateSuccess(redirect) {
		redirect.router.transitionTo('/cart');
	}
}

export default alt.createStore(CFContactStore);