import React from 'react';
import AdminHeaderActions from '../actions/AdminHeaderActions';
import AdminHeaderStore from '../stores/AdminHeaderStore';

class AdminHeader extends React.Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	handleVerificationRedirect() {
		AdminHeaderActions.redirectToVerification({
			router: this.context.router
		})
	}

	handleOfferRedirect() {
		AdminHeaderActions.redirectToOffer({
			router: this.context.router
		});
	}

	componentDidMount() {
		AdminHeaderStore.listen(this.onChange);
	}

	componentWillUnmount() {
		AdminHeaderStore.unlisten(this.onChange);
	}

	onClick(state) {
		this.setState(state);
	}

	render() {
		return(
			<div className="row headerSection">
					<div className="header1">
						<div className="col-xs-6 col-md-6" >
							<div className="col-sm-12 imgLogoWrap">
								<img src="img/oth_logo.jpg" style={{width:35+"%"}} /> 
								<label>(Admin Portal)</label>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
						</div>
					</div>
					<div className="borderHeader">
							<div className="col-md-6 col-xs-6 orange"></div>
							<div className="col-md-6 col-xs-6 brown"></div>
					</div>
					<div className="header2">
						<div className="contentMargin">
						<button onClick={this.handleVerificationRedirect.bind(this)}>verification</button>
						<button onClick={this.handleOfferRedirect.bind(this)}>offers</button>
						</div>
					</div>
			</div>
			);
	}
}

AdminHeader.contextTypes = {
	router: React.PropTypes.func.isRequired
}

export default AdminHeader;