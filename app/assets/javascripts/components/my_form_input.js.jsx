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
  handleSubmit: function(e) {
    e.preventDefault();
    var application =  {
      'data' : {
        'type': 'application',
        'attributes':{
          'firstName': this.state.firstName.trim(),
          'lastName':  this.state.lastName.trim(),
          'faculty': this.state.faculty.trim(),
          'programOfStudy':  this.state.programOfStudy.trim(),
          'email': this.state.email.trim(),
          'commitments': this.state.commitments.trim(),
          'linkedInUrl': this.state.linkedInUrl.trim(),
          'githubUrl': this.state.githubUrl.trim(),
          'whyGoodCandidate':  this.state.whyGoodCandidate.trim(),
          'resumeUrl': this.state.resumeUrl.trim(),
          'additionalInfo':  this.state.additionalInfo.trim()
        }
      }
    };
    $.ajax({
      url: '/applications',
      dataType: 'json',
      type: 'POST',
      data: application,
      success: function(data) {
        debugger;
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    return (
      <form role='form' onSubmit={this.handleSubmit} accept-charset='UTF-8'>
        <input type='hidden' name='_method' value='patch' />
        <input type='hidden' name='utf8' value='✓' />
        <input type='hidden' name='authenticity_token' value={csrfToken} />
        {this.renderTextInput('firstName', 'First Name', this.state.firstName ,this.handleFirstNameChange)}
        {this.renderTextInput('lastName', 'Last Name', this.state.lastName, this.handleLastNameChange)}
        {this.renderTextInput('faculty', 'Faculty', this.state.faculty, this.handleFacultyChange)}
        {this.renderTextInput('programOfStudy', 'Program of Study', this.state.programOfStudy, this.handleProgramOfStudyChange)}
        {this.renderTextInput('email', 'Please enter your preferred email address for contact', this.state.email, this.handleEmailChange)}
        {this.renderTextArea('commitments', 'Other commitments during the year (e.g. Co-op, Exchange, Part-time job, Other extracurriculars, Other clubs, etc.)', this.state.commitments, this.handleCommitmentsChange)}
        {this.renderTextInput('linkedInUrl', 'LinkedIn URL', this.state.linkedInUrl, this.handleLinkedInUrlChange)}
        {this.renderTextInput('githubUrl', 'Github URL', this.state.githubUrl, this.handleGithubUrlChange)}
        {this.renderTextArea('whyGoodCandidate', 'Why would you be a good candidate?', this.state.whyGoodCandidate, this.handleWhyGoodCandidateChange)}
        {this.renderTextInput('resumeUrl', 'Resume URL (Dropbox, Google Docs, etc.)', this.state.resumeUrl, this.handleResumeUrlChange)}
        {this.renderTextArea('additionalInfo', 'Anything else?', this.state.additionalInfo, this.handleAdditionalInfoChange)}
        <input type="submit" value="Apply" className="signup" />
      </form>
    );
  },
  handleFirstNameChange: function(e) {
    this.setState({firstName: e.target.value});
  },
  handleLastNameChange: function(e) {
    this.setState({lastName: e.target.value});
  },
  handleFacultyChange: function(e) {
    this.setState({faculty: e.target.value});
  },
  handleProgramOfStudyChange: function(e) {
    this.setState({programOfStudy: e.target.value});
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handleCommitmentsChange: function(e) {
    this.setState({commitments: e.target.value});
  },
  handleLinkedInUrlChange: function(e) {
    this.setState({linkedInUrl: e.target.value});
  },
  handleGithubUrlChange: function(e) {
    this.setState({githubUrl: e.target.value});
  },
  handleWhyGoodCandidateChange: function(e) {
    this.setState({whyGoodCandidate: e.target.value});
  },
  handleResumeUrlChange: function(e) {
    this.setState({resumeUrl: e.target.value});
  },
  handleAdditionalInfoChange: function(e) {
    this.setState({additionalInfo: e.target.value});
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
  renderTextArea: function(id, label, state, handler){
    return this.renderField(id, label,
      <textarea
        rows="3"
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
