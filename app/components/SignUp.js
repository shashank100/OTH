import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FBLogin from './FBLogin';
import SignUpForm from './SignUpForm';

class SignUp extends React.Component {

	render() {
		return(
		<div className="container-fluid loginPage registerPage">
			<Header />
			<div className="row othLogin">
				<div className="col-md-12 loginhead">Sign up to claim your free offer!</div>
				<FBLogin />
				<SignUpForm />
			</div>
			<Footer />
		</div>
		);
	}
}

export default SignUp;