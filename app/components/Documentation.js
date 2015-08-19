import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DropZone from './DropZone';

class Documentation extends React.Component {
	render() {
		return(
			<div classNameNameName="container-fluid loginPage registerPage">
				<Header />
				<div className="row pDetails">
					<div className="pDetailsInnerWrapper">
						<center>
							<ul>
								<li>About Your Home</li>
								<li className="activeLiPdetails">Documentation</li>
								<li>Your Contact @ CF</li>
							</ul>
						</center>

						<div className="col-sm-12 documentation">
							<label>Please help us verify your claim by uploading one of the following documents:<br />

							-  Rental Agreement    	-  Sale Agreement        -  Booking Receipt</label>
							
							<DropZone />
							<input type="button" value="Next" />
							
						</div>

					</div>
				</div>

				<Footer />
			</div>
			);
	}
}

export default Documentation;