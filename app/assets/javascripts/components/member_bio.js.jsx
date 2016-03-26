var MemberBio = React.createClass({	
	getInitialState() {
	    return {
	        bActive: false 
	    };
	},
	getDefaultProps() {
	    return {
	        bFourInARow: false  
	    };
	},
	handleMouseEnter(event) {
		this.setState({
			bActive: true 
		});
	},
	handleMouseLeave(event) {
		this.setState({
			bActive: false
		});
	},
  render() {
  	var active = this.state.bActive ? 'active' : '',
    		componentStyling = this.props.bFourInARow ? 'small-12 medium-3 columns ' + active : 'small-12 medium-4 columns ' + active,
    		imgAlt = this.props.firstName + ' ' + this.props.lastName
    return (
    	<div 
    		className={componentStyling}
    		onMouseEnter={this.handleMouseEnter}
    		onMouseLeave={this.handleMouseLeave}
    	>
    		<Image imgUrl={this.props.imgUrl} imgAlt={imgAlt} />
    		<MemberDesc 
	    		role={this.props.role}
	    		yearsActive={this.props.yearsActive}
    			firstName={this.props.firstName} 
    			lastName={this.props.lastName} 
    			hasWebsite={this.props.hasWebsite}
    			websiteUrl={this.props.websiteUrl}
    		/>
    	</div>
   	);
  }
});
