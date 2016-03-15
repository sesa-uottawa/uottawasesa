var MyFormInput = React.createClass({
  getInitialState: function() {
    return {
      firstName: '',
      lastName: '',
      faculty: '',
      programOfStudy: '',
      email: '',
      commitments: '',
      linkedInUrl: '',
      githubUrl: '',
      whyGoodCandidate: '',
      resumeUrl: '',
      additionalInfo: ''
    }
  },
  render: function() {
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    return (
      <form role='form' action='/users' method='post' accept-charset='UTF-8'>
        <input type='hidden' name='_method' value='patch' />
        <input type='hidden' name='utf8' value='✓' />
        <input type='hidden' name='authenticity_token' value={csrfToken} />
        {this.renderTextInput('firstName', 'First Name', this.state.firstName ,this.handleFirstNameChange)}
        {this.renderTextInput('lastName', 'Last Name', this.state.lastName, this.handleLastNameChange)}
        {this.renderTextInput('faculty', 'Faculty', this.state.faculty, this.handleFacultyChange)}
      </form>
    );
  },
  handleFirstNameChange: function(e) {
    window.console.log('firstName:' + e.target.value);
    this.setState({firstName: e.target.value});
  },
  handleLastNameChange: function(e) {
    window.console.log('lastName:' + e.target.value);
    this.setState({lastName: e.target.value});
  },
  handleFacultyChange: function(e) {
    window.console.log('faculty:' + e.target.value);
    this.setState({faculty: e.target.value});
  },
  renderTextInput: function(id, label, state, handler) {
    return this.renderField(id, label,
      <input
        type="text"
        className="form-control"
        id={id}
        ref={id}
        value={state}
        onChange={handler}
      />
    )
  },
  renderField: function(id, label, field) {
    return <div>
      <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
      <div className="col-sm-6">
        {field}
      </div>
    </div>
  }
});
