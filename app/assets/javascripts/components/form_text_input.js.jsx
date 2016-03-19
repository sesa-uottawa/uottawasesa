var FormTextInput = React.createClass({

  render: function() {
    return (
      <input
        type="text"
        className={this.props.className}
        id={this.props.id}
        ref={this.props.id}
        value={this.props.value}
        onChange={this.props.onChangeHander}
        placeholder={this.props.placeholder}
      />
    );
  }
});
