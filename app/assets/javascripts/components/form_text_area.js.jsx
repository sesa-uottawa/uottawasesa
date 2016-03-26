var FormTextArea = React.createClass({

  render: function() {
    return (
      <textarea
        rows={this.props.rows}
        className={this.props.className}
        id={this.props.id}
        ref={this.props.id}
        value={this.props.state}
        onChange={this.props.onChangeHander}
        placeholder={this.props.placeholder}
      />
    );
  }
});
