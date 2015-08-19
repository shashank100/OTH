import React from 'react';
import Footer from  './Footer';
import HomeCompanyLogos from './HomeCompanyLogos';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
        <div className="container-fluid ">
			<div className="row homePage">
				<div className="hpWrap">
					<img className="bgImage img-responsive" src="img/Background.jpg" />
					<div className="onTopHomeImage">
						<center>
							<div className="onTopHomeImageContent">
								<label>
									 Found a house via CommonFloor?
									<span className="tagline">A whole bunch of free house warming gifts await you!</span>
								</label>
								<img className="othLogo" src="img/oth_logo1.png" />
								<label className="poweredBy"> Powered By</label>
								<img src="img/cf_logo.png" />
							</div>
						</center>
						<div className="companyLogosMobile">
							<HomeCompanyLogos />
						</div>
						<div className="circleHome">
							<center>
								<a href="#HowTo"><img src="img/circleH.png" /></a>
							</center>
						</div>
					</div>
				</div>

				<div className="companyLogos">
					<HomeCompanyLogos />
				</div>
				<div className="howToavail" id="HowTo">
					<div className="availHeader">
							Heres how to avail your gifts
							<div className="col-md-6 col-xs-6 orange"></div>
							<div className="col-md-6 col-xs-6 brown"></div>
					</div>
					<div className="col-xs-12 col-md-6 tiles">
						<div className="col-xs-3">
							<img className="img-responsive" src="img/claimNow.png" />
						</div>
						<div className="col-xs-9 text">
							Go to "Claim Now" & submit your 
							property details and documents
						</div>
					</div>
					<div className="col-xs-12 col-md-6  tiles">
						<div className="col-xs-3">
							<img className="img-responsive" src="img/browse.png" />
						</div>
						<div className="col-xs-9 text">
							Browse through the list of free offers
						</div>
					</div>	
					<div className="col-xs-12 col-md-6  tiles">
						<div className="col-xs-3">
							<img className="img-responsive" src="img/cart.png" />
						</div>
						<div className="col-xs-9 text">
							Add the free offers you like to your 
							cart & checkout
						</div>
					</div>
					<div className="col-xs-12 col-md-6  tiles">
						<div className="col-xs-3">
							<img className="img-responsive" src="img/post.png" />
						</div>
						<div className="col-xs-9 text">
							Post-verification (max 1 - 2 working days), 
							you will receive the discount codes
						</div>
					</div>
					<div className="col-md-12 aruready">
						<center>
								<label>Are you ready?</label>
								<Link to='/login'>Claim Now</Link>
						</center>
					</div>	
				</div>
			</div>
			<Footer />		
		</div>
    );
  }
}

export default Home;