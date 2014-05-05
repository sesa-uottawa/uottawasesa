class StaticPagesController < ApplicationController
  def home
		if request.post? 
			# Send the e-mail
			first_name = params['first_name']
			last_name = params['last_name']
			email = params['email']
			faculty = params['faculty']
			commitment = params['commitment']
			why_join = params['why_join']
			goal = params['goal']
			UserMailer.new_member_confirmation(email, first_name, last_name).deliver
			@success = true

		end
	end
  
  def modal
  	respond_to do |format|
      format.html
      format.js
    end
  end

  def contact
  	if request.post? 
			# Send the e-mail
			first_name = params['first_name']
			last_name = params['last_name']
			email = params['email']
			message = params['message']
		UserMailer.contact_confirmation(email, first_name, last_name, message).deliver
			@success = true

		end

  end


  def meet
  end
  
end
