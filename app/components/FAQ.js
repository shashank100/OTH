import React from 'react';
import Footer from './Footer';
import Header from './Header';
class FAQ extends React.Component {
	render() {
		return(
	<div className="container-fluid">
		<Header />
		<div className="row faqs">
			<div className="headerFaq">
				<label>Frequentely Asked Questions</label>
			</div>

			<div className="questionTitle">
				<label>About <span>On The House</span></label>
			</div>
			
			
			<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
				  <div className="panel panel-default">
				    <div className="panel-heading" role="tab" id="headingOne">
				      <h4 className="panel-title">
				        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				           <div className="circleFaq"></div>What is on the hOuse?
				        </a>
				      </h4>
				    </div>
				    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
				      <div className="panel-body">
				        An initiative from CF, where the seeker who has newly shortlisted and bought or rented a property through CF will be able to select the discount offers from our select branded partners in Home Improvement, Furniture, Furnishings , Home loan, Electronics space.
				      </div>
				    </div>
				  </div>
				  <div className="panel panel-default">
				    <div className="panel-heading" role="tab" id="headingTwo">
				      <h4 className="panel-title">
				        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				         <div className="circleFaq"></div>House Does it work?
				        </a>
				      </h4>
				    </div>
				    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				      <div className="panel-body">
				       When you find your house on CF, come to the OTH home page and give us the property details. Once it is verified, we would like to say thanks by offering discount coupons for your new home.
				      </div>
				    </div>
				  </div>
				  <div className="panel panel-default">
				    <div className="panel-heading" role="tab" id="headingThree">
				      <h4 className="panel-title">
				        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
				           <div className="circleFaq"></div>Do i need to register to claim the coupons?
				        </a>
				      </h4>
				    </div>
				    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
				      <div className="panel-body">
				        Yes, you must have an existing account to claim these coupon codes. You can also sign in from Facebook or Google+ account.
				      </div>
				    </div>
				  </div>
				</div>
			</div>
			<Footer />
		</div>
			);
	}
}

export default FAQ;