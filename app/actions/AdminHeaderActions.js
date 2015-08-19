import alt from '../alt';
import {assign} from 'underscore';
class AdminHeaderActions {
	constructor() {
		this.generateActions(
				'redirectToVerification',
				'redirectToOffer'
			);
	}

	uploadDocument(files) {
		$.ajax({
			type: 'POST',
			url: '/upload',
			data: files.file,
			contentType: 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p',
			processData: false,
			cache: false
		})
		  .done((data) => {
		  	if(false == data.register) {
		  		this.actions.uploadFail(data.message);
		  	}
		  	else {
		  		assign(files,data);
		  		this.actions.uploadSuccess(files);
		  	}
		  })
		  .fail((jqXhr) => {
		  	this.actions.uploadFail('Some error occured');
		  });
	}
}

export default alt.createActions(AdminHeaderActions);