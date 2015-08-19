import alt from '../alt';
import {assign} from 'underscore';
class VerificationActions {
	constructor() {
		this.generateActions(
				'callSuccess',
				'callFail'
			);
	}

	getUserWithStatus(page) {
		$.ajax({
			type: 'POST',
			url: '/getUserWithStatus',
			data: page
		})
		  .done((data) => {
		  		console.log(data);
		  		this.actions.callSuccess(data);
		  })
		  .fail((jqXhr) => {
		  	this.actions.callFail('Some error occured');
		  });
	}
}


export default alt.createActions(VerificationActions);