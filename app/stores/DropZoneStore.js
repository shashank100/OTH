import alt from '../alt';
import DropZoneActions from '../actions/DropZoneActions';

class DropZoneStore {
	constructor() {
		this.bindActions(DropZoneActions);
		this.helpBlock = '';
		this.uploded = false;
	}

	onRemoveWarning() {
		this.helpBlock = '';
	}

	onInvalidType() {
		this.helpBlock = 'Invalid File Type only PDFs and JPEGs are allowed';
	}

	onUploadSuccess(redirect) {
		redirect.router.transitionTo('/cfcontact');
	}

	onUploadFail() {
		this.helpBlock = 'Some Error Occured';
	}
}

export default alt.createStore(DropZoneStore);