import alt from '../alt';
import AdminHeaderActions from '../actions/AdminHeaderActions';

class AdminHeaderStore {

	constructor() {
		this.bindActions(AdminHeaderActions);
	}

	onRedirectToVerification(redirect) {
		redirect.router.transitionTo('/adminpendingrequest');
	}

	onRedirectToOffer(redirect) {
		redirect.router.transitionTo('/adminoffer');
	}
	
}

export default alt.createStore(AdminHeaderStore);