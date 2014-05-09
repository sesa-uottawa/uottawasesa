class StaticPagesController < ApplicationController
  def home

    	@club_member = ClubMember.new

		if request.post? 

			if params['message'] == nil
				# Send the e-mail
				first_name = @club_member.first_name
				last_name = @club_member.last_name
				email = @club_member.email
				major = @club_member.major
				commitment = @club_member.commitment
				why_join = @club_member.why_join
				goal = @club_member.goal
				UserMailer.new_member_confirmation(email, first_name, last_name).deliver
				@club_member = ClubMember.new(club_member_params)
				@club_member.save
				@success_join = true

			else	
				# Send the e-mail
				first_name = params['first_name']
				last_name = params['last_name']
				email = params['email']
				message = params['message']
				UserMailer.contact_confirmation(email, first_name, last_name, message).deliver
				@success_contact = true
			end
		end
	end  


  def meet
  	@club_member = ClubMember.new

		if request.post? 

			if params['message'] == nil
				# Send the e-mail
				first_name = params['first_name']
				last_name = params['last_name']
				email = params['email']
				faculty = params['faculty']
				commitment = params['commitment']
				why_join = params['why_join']
				goal = params['goal']
				UserMailer.new_member_confirmation(email, first_name, last_name).deliver
				@club_member = ClubMember.new(club_member_params)
				@club_member.save
				@success_join = true
			else	
				# Send the e-mail
				first_name = params['first_name']
				last_name = params['last_name']
				email = params['email']
				message = params['message']
				UserMailer.contact_confirmation(email, first_name, last_name, message).deliver
				@success_contact = true
			end
		end
  end

	private

	    # Never trust parameters from the scary internet, only allow the white list through.
	    def club_member_params
	      params.require(:club_member).permit(:first_name, :last_name, :email, :major, :commitment, :why_join, :goal)
	    end

  
end
