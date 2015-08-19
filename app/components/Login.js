import React from 'react';
import Header from './Header';
import FBLogin from './FBLogin'
import FormLogin from './FormLogin';
import Footer from './Footer';

class Login extends React.Component {
	render() {
		return (
			<div className="container-fluid loginPage">
				<Header />
				<div className="row othLogin">
					<div className="col-md-12 loginhead">Sign in to edit your availed offers!</div>
					<FBLogin />
					<FormLogin />
				</div>
				<Footer />
					
			</div>
		)
	}
}


export default Login;