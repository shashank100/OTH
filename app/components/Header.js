import React from 'react';

class Header extends React.Component {
	render() {
		return(
			<div className="row OthHeaderSection">
				<div className="header1">
						<div className="col-xs-6 col-md-6" >
							<div className="col-sm-12 imgLogoWrap">
								<img src="img/oth_logo.jpg" style={{width:35+"%"}} /> 
							</div>
						</div>
						<div className="col-md-6 col-sm-6"></div>
				</div>
				<div className="borderHeader">
					<div className="col-md-6 col-xs-6 orange"></div>
					<div className="col-md-6 col-xs-6 brown"></div>
				</div>
				<div className="header2 ">
				</div>
			</div>
			)
	}
}

export default Header;