import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
	render() {
		return(
			<div className="row OthFooterSection">
				<center>
					<div className="col-md-12 col-xs-12 footer1">
						<ul>
							<li><Link to="/faq">FAQs</Link></li>
							<li><Link to="/privacypolicy">Privacy Policy</Link></li>
							<li><Link to="/howtoavail">How To Avail</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>
					<div className="col-md-12 col-sm-12 footer2">
							<div >
							Copyright © 2007-15 <a target="_blank" href="http://www.commonfloor.com" style={{color:"#f68121"}}>CommonFloor.com</a>   All rights reserved.
							</div>
					</div>
				</center>
			</div>
			);
	}
}

export default Footer;