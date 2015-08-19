import React from 'react';

class FBLogin extends React.Component {
	render() {
		return(
		<div className="col-md-6">
			<center>
				<div className="socialLogin">
					<img src="img/fb.png" /> 
				    <img src="img/gp.png" />
				    <span>Don’t worry we won’t post anything without your permission</span>
				</div>

				<div className="socialLoginMobile">
					<center>
						<div className="row">
							<div className="col-xs-6"><img src="img/mobileFb.png" /></div>
							<div className="col-xs-6"><img src="img/mobileG.png" /></div>
						</div>
						<div className="row permissopnMobile">
							<span>Don’t worry we won’t post anything without your permission</span>
						</div>
						 
					</center>
				</div>
			</center>
		</div>

			)
	}
}

export default FBLogin;