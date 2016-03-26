var FormTextInput = React.createClass({
  getDefaultProps() {
      return {
          type: 'text'  
      };
  },
  render() {
    return (
      <div>
        <input
          type={this.props.type}
          className={this.props.className}
          id={this.props.id}
          ref={this.props.id}
          value={this.props.value}
          onChange={this.props.onChangeHander}
          placeholder={this.props.placeholder}
        />
        <FormError />
      </div>
    );
  }
});
