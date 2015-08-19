import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CFContactStore from '../stores/CFContactStore';
import CFContactActions from '../actions/CFContactActions';

class CFContact extends React.Component {

	constructor(props) {
		super(props);
		this.state = CFContactStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	onChange(state) {
		this.setState(state);
	}

	componentDidMount() {
		CFContactStore.listen(this.onChange);
	}

	componentWillUnmount() {
		CFContactActions.unlisten(this.onChange);
	}

	handleSubmit() {
		var name = this.state.name;
		var phone = this.state.phone;
		var type = this.state.contactType;

		if(!name) {
			CFContactActions.invalidName();
		}

		if(!phone) {
			CFContactActions.invalidPhone();
		}

		if(!type) {
			CFContactActions.invalidType();
		}

		if(name && phone && type) {
			CFContactActions.updateCFContact({
				name: name,
				phone: phone,
				type: type,
				router: this.context.router
			});
		}
	}

	render() {
		return(
			<div className="container-fluid loginPage registerPage">
				<Header />
				<div className="pDetailsInnerWrapper">
						<center>
							<ul>
								<li>About Your Home</li>
								<li>Documentation</li>
								<li className="activeLiPdetails">Your Contact @ CF</li>
							</ul>
						</center>
						<div className="col-sm-12 contactAtCF">
							<label>Hi Abash, to start with tell us about your new home</label>
							<div className="formWrap">
								<span>Please select one:</span>
								<div className="inputRadio">	
									<input type="radio" name="contactType" value="owner" onChange={CFContactActions.updateCFContactType} checked={this.state.contactType === 'owner'} /><label>Owner</label>
									<input type="radio" name="contactType" value="builder" onChange={CFContactActions.updateCFContactType} checked={this.state.contactType === 'builder'} /><label>Builder</label>
									<input type="radio" name="contactType" value="agent" onChange={CFContactActions.updateCFContactType} checked={this.state.contactType === 'agent'} /><label style={{"marginRight":0+"px"}}>Agent</label>
								</div>
								<center>
									<input type="text" placeholder="Name" value={this.state.name} onChange={CFContactActions.updateCFContactName}  />
									<input type="text" placeholder="Mobile No" value={this.state.phone} onChange={CFContactActions.updateCFContactPhone} />
								</center>
							</div>
							<input type="button" value="Done" onClick={this.handleSubmit.bind(this)} />		
						</div>
				</div>
				<Footer />
			</div>
			);
	}
}

CFContact.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default CFContact;