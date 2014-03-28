class UserMailer < ActionMailer::Base
  default from: "uottawa.sesa@gmail.com"

  def new_member_confirmation(email, first_name, last_name)
  	@email, @first_name, @last_name = email, first_name, last_name

  	mail(:to => email, :subject => "Thank you for joining the SESA!")
  end


  def contact_confirmation(email, first_name, last_name, message)
    @email, @first_name, @last_name, @message = email, first_name, last_name, message

    mail(:to => email, :subject => "Thank you for contacting the SESA!")
  end

end
