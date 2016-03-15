var YourForm = React.createClass({
  render: function() {
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    return (
      <form role='form' action='/users' method='post' accept-charset='UTF-8'>
        <input type='hidden' name='_method' value='patch' />
        <input type='hidden' name='utf8' value='✓' />
        <input type='hidden' name='authenticity_token' value={csrfToken} />
        {this.renderTextInput('firstName', 'First Name')}
        {this.renderTextInput('lastName', 'Last Name')}
        {this.renderTextInput('faculty', 'Faculty')}
        {this.renderTextInput('programOfStudy', 'Program of Study')}
        {this.renderTextInput('email', 'Please enter your preferred email address for contact')}
        {this.renderTextArea('commitments', 'Other commitments during the year (e.g. Co-op, Exchange, Part-time job, Other extracurriculars, Other clubs, etc.)')}
        {this.renderTextInput('linkedInUrl', 'LinkedIn URL')}
        {this.renderTextInput('githubUrl', 'Github URL')}
        {this.renderTextArea('whyGoodCandidate', 'Why would you be a good candidate?')}
        {this.renderTextInput('resumeUrl', 'Resume URL (Dropbox, Google Docs, etc.)')}
        {this.renderTextArea('additionalInfo', 'Anything else?')}
        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  },
  renderTextInput: function(id, label) {
    return this.renderField(id, label,
      <input type="text" className="form-control" id={id} ref={id} />
    )
  },
  renderTextArea: function(id, label) {
    return this.renderField(id, label,
      <textarea rows="3" className="form-control" id={id} ref={id} />
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
