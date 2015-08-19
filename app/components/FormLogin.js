import React from 'react';
import LoginFormActions from '../actions/LoginFormActions';
import LoginFormStore from '../stores/LoginFormStore';

class FormLogin extends React.Component {

	constructor(props) {
		super(props);
		this.state = LoginFormStore.getState();
		this.onChange = this.onChange.bind(this);
		console.log('running')
	}

	componentDidMount() {
		LoginFormStore.listen(this.onChange);
	}

	onChange(state) {
		console.log('hey ho')
		this.setState(state);
	}

	handleSubmit() {

		var email = this.state.email.trim();
		var password = this.state.password;
		
		if(!email) {
			LoginFormActions.invalidEmail();
		 }

		 if(!password) {
		 	LoginFormActions.invalidPassword();
		 }

		 if(email && password) {
		 	 LoginFormActions.login({
		 	 	email: email,
		 	 	password: password,
		 	 	router: this.context.router
		 	 });
		 }

	}

	componentWillUnmount() {
		LoginFormStore.unlisten(this.onChange);
	}

	handleSignUpRedirect() {
		LoginFormActions.signUp({router: this.context.router});
	}

	render() {
		return(
			<div className="col-md-6 l">
				<div className="loginForm">
					<div className="loginFormWrap">
						<p style={{color:'red'}} className="help-block">{this.state.helpBlock}</p>
						<input type="text" placeholder="Email id" value={this.state.email} onChange={LoginFormActions.updateEmail} />
						<input type="password" placeholder="password" value={this.state.password} onChange={LoginFormActions.updatePassword}/>
					</div>
					<span><a className="fp" href="">Forgot Password?</a></span>
					<div className="row">
						<div className="col-xs-6 col-sm-6 signIn">
							<input type="button" value="Sign In" onClick={this.handleSubmit.bind(this)} />
							<span>*mandatory fields</span>
						</div>
						<div className="col-xs-6 col-sm-6 signUp">
							<input className="pull-right" type="button" value="Sign Up" onClick={this.handleSignUpRedirect.bind(this)} />
							<span>not registered yet?</span>
						</div>
					</div>
					<div className="mandy">
						
					</div>
				</div>
			</div>
			)
	}
}

FormLogin.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default FormLogin;