var Image = React.createClass({

  render() {
  	var imgSizing = {width: '200px', height: '200px'};
    return (
    	<div>
    		<img 
	    		src={this.props.imgUrl} 
	    		alt={this.props.imgAlt}
	    		style={imgSizing}
			/>
    	</div>
    );
  }
});
