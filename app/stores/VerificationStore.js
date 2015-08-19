import alt from '../alt';
import VerificationActions from '../actions/VerificationActions';

class VerificationStore {
	constructor() {
		this.bindActions(VerificationActions);
		this.results = [];
		this.helpBlock = '';
	}

	onCallSuccess(data) {
		this.results = data;
	}

	onCallFail(errMsg) {
		this.helpBlock = errMsg;
	}

}

export default alt.createStore(VerificationStore);