import React from 'react';
import SignUpFormActions from '../actions/SignUpFormActions';
import SignUpFormStore from '../stores/SignUpFormStore';

class SignUpForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = SignUpFormStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		SignUpFormStore.listen(this.onChange);

	}

	

	onChange(state) {
		this.setState(state);
	}

	handleSubmit() {
		var name = this.state.username.trim();
		var email = this.state.email.trim();
		var password = this.state.password;
		var number = this.state.number;


		if(!name) {
			SignUpFormActions.invalidUsername();
		 	this.ref.nameTextField.getDOMNode().focus();
		 }
		
		if(!email) {
			SignUpFormActions.invalidEmail();
		 	this.refs.emailTextField.getDOMNode().focus();
		 }

		 if(!password) {
		 	SignUpFormActions.invalidPassword();
		 	this.ref.passwordTextField.getDOMNode().focus();
		 }

		 if(!number) {
		 	SignUpFormActions.invalidNumber();
		 	this.ref.numberTextField.getDOMNode().focus();
		 }

		 if(email && password && number && name) {
		 	 SignUpFormActions.signup({
		 	 	name: name,
		 	 	email: email,
		 	 	password: password,
		 	 	number: number,
		 	 	router: this.context.router
		 	 });
		 }
	}


	handleLoginRedirect() {
		SignUpFormActions.login({router: this.context.router})
	}

	componentWillUnmount() {
		SignUpFormStore.unlisten(this.onChange);
	}

	render() {
		return(
				<div className="col-md-6 l">
						<div className="loginForm">
							<div className="loginFormWrap">
								<p style={{color:'red'}} className="help-block">{this.state.helpBlock}</p>
								<input type="text" ref="nameTextField" placeholder="Full Name" value={this.state.username} onChange={SignUpFormActions.updateUsername} />
								<input type="email" ref="emailTextField" placeholder="Email id" value={this.state.email} onChange={SignUpFormActions.updateEmail} />
								<input type="password" ref="passwordTextField" placeholder="password" value={this.state.password} onChange={SignUpFormActions.updatePassword} />
								<input type="text" ref="numberTextField" placeholder="Mobile No" value={this.state.number} onChange={SignUpFormActions.updateNumber} />
							</div>
							
							<div className="row">
								<div className="col-xs-6 col-sm-6 signIn">
									<input type="button" value="Sign Up" onClick={this.handleSubmit.bind(this)} />
									<span>*mandatory fields</span>
								</div>
								<div className="col-xs-6 col-sm-6 signUp">
									<input className="pull-right" type="button" value="Sign In" onClick={this.handleLoginRedirect.bind(this)} />
									<span>Already registered?</span>
								</div>
							</div>
							<div className="mandy">
								
							</div>
						</div>
				</div>
			);
	}
}

SignUpForm.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default SignUpForm;