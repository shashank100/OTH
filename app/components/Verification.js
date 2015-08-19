import React from 'react';
import Footer from './Footer';
import AdminHeader from './AdminHeader';
import Status from './Status';
import VerificationActions from '../actions/VerificationActions';
import VerificationStore from '../stores/VerificationStore';


class Verification extends React.Component {

	constructor() {
		super()
		this.state = VerificationStore.getState();
		this.onChange = this.onChange.bind(this);
		console.log('i jsut ran')
	}

	componentDidMount() {
		VerificationStore.listen(this.onChange);
	}

	componentWillUnmount() {
		VerificationStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleClick(data) {
		VerificationActions.getUserWithStatus({
			status: data
		});
	}
	
	render() {
		
		var res =  this.state.results.map((request, i) => {
				 	return(
							<div className="mainContent" key={i}>
								<div className="col-md-12" style={{"paddingTop":10+"px"}}>
									<div className="col-xs-3 col-md-3 col1Contact">
										<div className="name">
											{request.user}
										</div>
										<div>
											<i className="fa fa-phone"></i>{request.number}
										</div>
										<div>
											<i className="fa fa-envelope"></i>{request.email}
										</div>
									</div>

									<div className="col-xs-4 col-md-4 col2Contact">
										<div>
										 Documet:<a href="">Property Agreement</a>
										</div>	
										<div>
										 Broker Name:<span>{request.commonfloorContactName}</span>
										</div>	
										<div>
											<i className="fa fa-phone"></i>{request.commonfloorContactNumber}
										</div>
									</div>

									<div className="col-xs-3 col-md-3 col3Contact">
										<div>
										 Property:<span>{request.type}</span>
										</div>	
										<div>
										 Offers Availed:<span>'yet to set'</span>
										</div>	
									</div>

									<div className="col-xs-2 col-md-2">
										<input className="failedBtn pull-right" type="button" disabled />
									</div>
								</div>
								<div className="col-md-12 commentWrap">
									<div className="comment col-md-10 col-xs-10">
										<img src="img/comment.png" /> Last Comment:<span>'yet to set'</span>
									</div>
									<div className="col-md-2 col-xs-2  viewMore pull-right"><a href="" className="pull-right">View More</a></div>
								</div>
							</div>
							);
						});

		return(
			<div className="container-fluid">
					<AdminHeader />
					<div className="row contentArea">
						<div className="contentMargin">
							<ul>
								<li className={(this.state.page === "pending") ? "active" : "" } onClick={this.handleClick.bind(this, "pending")} >Pending Requests</li>
								<li className={(this.state.page === "verified") ? "active" : "" } onClick={this.handleClick.bind(this, "verified")} >Verified Requests</li>
								<li className={(this.state.page === "failed") ? "active" : "" } onClick={this.handleClick.bind(this, "failed")} >Failed Requests</li>
							</ul>
							{res}
				</div>
					</div>
					<Footer />
			</div>

			);
	}
}

export default Verification;