import React from 'react';
import Dropzone from 'react-dropzone';
import DropZoneActions from '../actions/DropZoneActions';
import DropZoneStore from '../stores/DropZoneStore';

class DropZone extends React.Component{

	constructor(props) {
		super(props);
		this.state = DropZoneStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	onDrop(files) {
		DropZoneActions.removeWarning();
		if(files[0].type != "application/pdf" && files[0].type != "image/jpeg") {
			DropZoneActions.invalidType();
		}
		else {
			DropZoneActions.uploadDocument({
				file: files[0],
				router: this.context.router
			});
		}
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		return(
			  <div>
	            <Dropzone onDrop={this.onDrop.bind(this)} width={300} height={200} multiple={false} accept={'.jpg,.pdf,.jpeg'} >
	              <div>Try dropping some files here, or click to select files to upload.</div>
	            </Dropzone>
	            <p style={{color:'red'}} className="help-block">{this.state.helpBlock}</p>
	          </div>
			);
	}
}

DropZone.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default DropZone;