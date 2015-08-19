import React from 'react';

class HomeCompanyLogos extends React.Component {
	render() {
		return (
			<center>
				<div className="col-xs-12 col-md-2 partners">Partner:</div>
				<div className="col-xs-3 col-md-2">
					<img className="img-responsive" src="img/ulLogo.png" />
				</div>
				<div className="col-xs-3 col-md-2">
					<img className="img-responsive" src="img/homelane.png" />
				</div>
				<div className="col-xs-3 col-md-2">
					<img className="img-responsive" src="img/furlenco.png" />
				</div>
				<div className="col-xs-3 col-md-2 hdfc">
					<img className="img-responsive" src="img/hdfc.png" />
				</div>
				<div className="col-xs-12 col-md-2 viewMore"><a href="">View more offers>></a></div>
			</center>
		)
	}
}

export default HomeCompanyLogos;