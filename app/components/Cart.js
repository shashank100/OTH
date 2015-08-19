import React from 'react';
import Header from './Header';
import Footer from  './Footer';

class Cart extends React.Component {
	render() {
		return(
			 <div className="container-fluid ">
				<div className="row OthHeaderSection">
					<div className="header1">
						<div className="col-xs-6 col-md-6" >
							<div className="col-sm-12 imgLogoWrap">
								<a href="/"><img  src="img/oth_logo.jpg" style={{width:35+"%"}} /> </a>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">

						</div>
					</div>
					<div className="borderHeader">
						<div className="col-md-6 col-xs-6 orange"></div>
						<div className="col-md-6 col-xs-6 brown"></div>
					</div>
					<div className="header2">
						<div className="filterWrapper">
							<center>
								<ul className="filterMenu">
									Category >
									<li>Home Loans</li>
									<li>Furnitures</li>
									<li>Home Services</li>
									<li>Relocation</li>
									<li>Appliances</li>
									<li>Health & Fitness</li>
									<li className="lilast" >
										<select class="form-control">
											<option>Others</option>
										</select>
									</li>

								</ul>
							</center>
						</div>
					</div>
				</div>
				

				<div className="row offersPageDT">
					<div className="offerTilesWrap">

						<div className="col-md-4">
							<div className="offerImgWrap">
								<div className="col-xs-6 col-md-12 mobileImgWrap">
									<img className="offerImg"src="img/offerImg.png" />
								</div>
								<div className="offerImgTopInfo col-xs-6">
									<div className="logoWrap">
										<div className="col-md-7 offerText">GET RS.5000 OFF ON FURNITURE SHOPPING</div>
										<div className="col-md-5"><img className="pull-right" src="img/ulLogo.png" /></div>
									</div>
									<div className="showOnHover">
										<div className="col-md-8 vp">Validity Period:<span>25th Feb, 2015</span></div>
										<div className="col-md-4 btnAddCart">
											<input type="button" value="Add to Cart" />
										</div>
									</div>
								</div>

								<div className="col-xs-6 mobileOfferInfoDetails">
									    <div className="col-xs-12  offerText">
									    	GET RS.5000 OFF ON FURNITURE SHOPPING
									        <div className="vp">Validity Period:<span>25th Feb, 2015</span></div>
									    </div>
										<div className="col-xs-12 "><img src="img/ulLogo.png" /></div>
										<input type="button" value="Add to Cart" />
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="offerImgWrap">
								<div className="col-xs-6 col-md-12 mobileImgWrap">
									<img className="offerImg"src="img/offerImg.png" />
								</div>
								<div className="offerImgTopInfo col-xs-6">
									<div className="logoWrap">
										<div className="col-md-7 offerText">GET RS.5000 OFF ON FURNITURE SHOPPING</div>
										<div className="col-md-5"><img className="pull-right" src="img/ulLogo.png" /></div>
									</div>
									<div className="showOnHover">
										<div className="col-md-8 vp">Validity Period:<span>25th Feb, 2015</span></div>
										<div className="col-md-4 btnAddCart">
											<input type="button" value="Add to Cart" />
										</div>
									</div>
								</div>

							
								<div className="col-xs-6 mobileOfferInfoDetails">
									    <div className="col-xs-12  offerText">
									    	GET RS 5000 OFF ON FURNITURE SHOPPING
									        <div className="vp">Validity Period:<span>25th Feb, 2015</span></div>
									    </div>
										<div className="col-xs-12 "><img src="img/ulLogo.png" /></div>
										<input type="button" value="Add to Cart" />
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="offerImgWrap">
								<div className="col-xs-6 col-md-12 mobileImgWrap">
									<img className="offerImg"src="img/offerImg.png" />
								</div>
								<div className="offerImgTopInfo col-xs-6">
									<div className="logoWrap">
										<div className="col-md-7 offerText">GET RS.5000 OFF ON FURNITURE SHOPPING</div>
										<div className="col-md-5"><img className="pull-right" src="img/ulLogo.png" /></div>
									</div>
									<div className="showOnHover">
										<div className="col-md-8 vp">Validity Period:<span>25th Feb, 2015</span></div>
										<div className="col-md-4 btnAddCart">
											<input type="button" value="Add to Cart" />
										</div>
									</div>
								</div>

							
								<div className="col-xs-6 mobileOfferInfoDetails">
									    <div className="col-xs-12  offerText">
									    	GET RS.5000 OFF ON FURNITURE SHOPPING
									        <div className="vp">Validity Period:<span>25th Feb, 2015</span></div>
									    </div>
										<div className="col-xs-12 "><img src="img/ulLogo.png" /></div>
										<input type="button" value="Add to Cart" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>		
			)
	}
}


export default Cart;