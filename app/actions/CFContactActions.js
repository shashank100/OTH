import alt from '../alt';
import {assign} from 'underscore';
class CFContactActions {
	constructor() {
		this.generateActions(
				'updateCFContactName',
				'updateCFContactPhone',
				'updateCFContactType',
				'invalidName',
				'invalidPhone',
				'invalidType',
				'updateFail',
				'updateSucces'
			);
	}

	updateCFContact(credentials) {
		$.ajax({
			type: 'POST',
			url: '/uploadCFContact',
			data: {name: credentials.name, phone: credentials.phone, type: credentials.type}
		})
		  .done((data) => {
		  		
		  })
		  .fail((jqXhr) => {
		  	this.actions.uploadFail('Some error occured');
		  });
	}
}

export default alt.createActions(CFContactActions);