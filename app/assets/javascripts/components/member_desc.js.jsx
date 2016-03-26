var MemberDesc = React.createClass({
	getDefaultProps() {
	    return {
	    	hasWebsite: false      
	    };
	},
	memberName(){
		var sName = this.props.firstName + ' ' + this.props.lastName,
  		title = sName + "'s personal website";
		if (this.props.hasWebsite){
			return (<a href={this.props.websiteUrl} title={title}><span id="name">{sName}</span></a>);
		}
		else{
			return (<span id="name">{sName}</span>);
		}
	},
  render() {
  	var {role, yearsActive, ...options} = this.props,
				 memberName = this.memberName(),
				 activeMember = yearsActive === undefined ? '' : yearsActive;
    return (
    	<div>
	    	<div id="memberName">
    			{memberName}
    		</div>
        <div id="role" style={{fontSize: '0.707em'}}>{role}</div>
        <div id="activeMember" style={{fontSize: '0.5em', color: '#2b0000', backgroundColor: '#FFFFFF'}}>{activeMember}</div>
    	</div>
    );
  }
});
