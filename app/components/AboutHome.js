import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Router from 'react-router';
import AboutHomeStore from '../stores/AboutHomeStore';
import AboutHomeActions from '../actions/AboutHomeActions';

class AboutHome extends React.Component {

	constructor(props) {
		super(props);
		this.state = AboutHomeStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AboutHomeStore.listen(this.onChange);
		AboutHomeActions.getUser();
	}

	componentWillUnmount() {
		AboutHomeStore.unlisten(this.onChange);	
	}

  	onChange(state) {
    	this.setState(state);
  	}

  	handleType() {
  		AboutHomeActions.selectType();
  	}

  	handleSubmit() {
  		var line1   = this.state.line1;
  		var line2   = this.state.line2;
  		var state   = this.state.state;
  		var city    = this.state.city;
  		var pincode = this.state.pincode;
  		var type    = '';

  		if(this.state.type == 0) {
  			type = 'buy';
  		}
  		else {
  			type = 'rent';
  		}

  		if(line1 == "") {
  			AboutHomeActions.invalidLine1();
  		}

  		if(line2 == "") {
  			AboutHomeActions.invalidLine2();
  		}

  		if(state == "") {
  			AboutHomeActions.invalidState();
  		}

  		if(city == "") {
  			AboutHomeActions.invalidCity();
  		}

  		if(pincode == "") {
  			AboutHomeActions.invalidPincode();
  		}	

  		if(line1 && line2 && city && state && pincode) {
  			AboutHomeActions.putAboutHome({
  				addressLine1: line1,
  				addressLine2: line2,
  				city: city,
  				state: state,
  				pincode: pincode,
  				type: type,
  				router: this.context.router
  			});
  		}

  	}

	render() {
		return(
			<div className="container-fluid loginPage registerPage">
				<Header />
				<div className="row pDetails">
					<div className="pDetailsInnerWrapper">
						<center>
							<ul>
								<li className="activeLiPdetails">About Your Home</li>
								<li>Documentation</li>
								<li>Your Contact @ CF</li>
							</ul>
						</center>
						<div className="col-sm-12 aboutYourHome" >
							<label>Hi {this.state.name == "" ? 'User': this.state.name}, to start with tell us about your new home</label>
							<div className="formWrap">
								<span>Address Line 1:</span>
								<input type="text" value={this.state.Line1} onChange={AboutHomeActions.updateLine1} placeholder="" />
								<span>Address Line 2:</span>
								<input type="text" value={this.state.Line2} onChange={AboutHomeActions.updateLine2} placeholder="" />
								<div className="col-sm-4 l">
										<span>Town/City:</span>
										<input type="text" value={this.state.city} onChange={AboutHomeActions.updateCity} placeholder="" />
								</div>
								<div className="col-sm-4">
										<span>State:</span>
										<input type="text" value={this.state.state} onChange={AboutHomeActions.updateState} placeholder="" />
								</div>
								<div className="col-sm-4 r">
										<span>Pincode:</span>
										<input type="text" value={this.state.pincode} onChange={AboutHomeActions.updatePincode} placeholder="" />
								</div>
								
							</div>
							<input type="button" value="Next" onClick={this.handleSubmit.bind(this)} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
			);
	}
}

AboutHome.contextTypes = {
 router: React.PropTypes.func.isRequired
};

export default AboutHome;