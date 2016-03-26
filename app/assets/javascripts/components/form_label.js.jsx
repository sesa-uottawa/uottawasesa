var FormLabel = React.createClass({

  render: function() {
    return (
      <div>
        <label htmlFor={this.props.id} className="col-sm-4 control-label" name={this.props.label}>{this.props.label}</label>
        <div className="col-sm-6">
          {this.props.children}
        </div>
      </div>
    );
  }
});
