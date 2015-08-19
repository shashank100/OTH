import alt from '../alt';
import {assign} from 'underscore';
class AboutHomeActions {
	constructor() {
		this.generateActions(
				'getName',
				'updateLine1',
				'updateLine2',
				'updateCity',
				'updateState',
				'updatePincode',
				'invalidLine1',
				'invalidLine2',
				'invalidCity',
				'invalidState',
				'invalidPincode',
				'registerFail',
				'selectType',
				'registerSuccess'
			);
	}

	getUser() {
		$.ajax({
			type: 'POST',
			url: '/getUserInfo',
		})
		  .done((data) => {
		  	if(false == data.exist) {
		  		//handle redirect, user does not exist
		  	}
		  	else {
		  		this.actions.getName(data);
		  	}
		  })
		  .fail((jqXhr) => {
		  	this.actions.callFail(data.message);
		  });
	}

	putAboutHome(registerHome) {
		$.ajax({
			type: 'POST',
			url: '/registerAddress',
			data: { addressLine1: registerHome.addressLine1, addressLine2: registerHome.addressLine2, city: registerHome.city, state: registerHome.state, pincode: registerHome.pincode, type: registerHome.type }
		})
		  .done((data) => {
		  		console.log(data.message)
		  		this.actions.registerSuccess(registerHome);
		  })
		  .fail((jqXhr) => {
		  	this.actions.registerFail('Some error occured');
		  });
	}

}

export default alt.createActions(AboutHomeActions);