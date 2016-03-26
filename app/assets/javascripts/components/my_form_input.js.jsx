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
        $(ReactDOM.findDOMNode(this)).hide();
        $('.successful-application').show();
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        $(ReactDOM.findDOMNode(this)).hide();
        $('.retry-application').show();
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <form role='form' onSubmit={this.handleSubmit} acceptCharset='UTF-8'>
        <FormLabel id={"firstName"} label={"First Name"}>
          <FormTextInput className={"form-control"} id={"firstName"} value={this.state.firstName} onChangeHander={this.handleFirstNameChange} />
        </FormLabel>
        <FormLabel id={"lastName"} label={"Last Name"}>
          <FormTextInput className={"form-control"} id={"lastName"} value={this.state.lastName} onChangeHander={this.handleLastNameChange} />
        </FormLabel>
        <FormLabel id={"faculty"} label={"Faculty"}>
          <FormTextInput className={"form-control"} id={"faculty"} value={this.state.faculty} onChangeHander={this.handleFacultyChange} placeholder={"Faculty of Engineering"} />
        </FormLabel>
        <FormLabel id={"programOfStudy"} label={"Program of Study"}>
          <FormTextInput className={"form-control"} id={"programOfStudy"} value={this.state.programOfStudy} onChangeHander={this.handleProgramOfStudyChange} placeholder={"Software Engineering"} />
        </FormLabel>
        <FormLabel id={"email"} label={"Please enter your preferred email address for contact"}>
          <FormTextInput type={"email"} className={"form-control"} id={"email"} value={this.state.email} onChangeHander={this.handleEmailChange} placeholder={"esmith007@uottawa.ca"} />
        </FormLabel>
        <FormLabel id={"commitments"} row={"3"} label={"Other commitments during the year (e.g. Co-op, Exchange, Part-time job, Other extracurriculars, Other clubs, etc.)"}>
          <FormTextArea className={"form-control"} id={"commitments"} value={this.state.commitments} onChangeHander={this.handleCommitmentsChange} />
        </FormLabel>
        <FormLabel id={"linkedInUrl"} label={"LinkedIn URL"}>
          <FormTextInput className={"form-control"} id={"linkedInUrl"} value={this.state.linkedInUrl} onChangeHander={this.handleLinkedInUrlChange} />
        </FormLabel>
        <FormLabel id={"githubUrl"} label={"Github URL"}>
          <FormTextInput className={"form-control"} id={"githubUrl"} value={this.state.githubUrl} onChangeHander={this.handleGithubUrlChange} />
        </FormLabel>
        <FormLabel id={"whyGoodCandidate"} row={"3"} label={"Why would you be a good candidate?"}>
          <FormTextArea className={"form-control"} id={"whyGoodCandidate"} value={this.state.whyGoodCandidate} onChangeHander={this.handleWhyGoodCandidateChange} />
        </FormLabel>
        <FormLabel id={"resumeUrl"} label={"Resume URL (Dropbox, Google Docs, etc.)"}>
          <FormTextInput className={"form-control"} id={"resumeUrl"} value={this.state.resumeUrl} onChangeHander={this.handleResumeUrlChange} />
        </FormLabel>
        <FormLabel id={"additionalInfo"} row={"3"} label={"Anything else?"}>
          <FormTextArea className={"form-control"} id={"additionalInfo"} value={this.state.additionalInfo} onChangeHander={this.handleAdditionalInfoChange} />
        </FormLabel>
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
  }
});
