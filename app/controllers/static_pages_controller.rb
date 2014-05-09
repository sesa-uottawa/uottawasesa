class StaticPagesController < ApplicationController
  def home
    
    @club_member = ClubMember.new

  end  

  def modal 

			if params['message'].nil?
				@club_member = ClubMember.new(club_member_params)

				first_name = @club_member.first_name
				last_name = @club_member.last_name
				email = @club_member.email
				major = @club_member.major
				commitment = @club_member.commitment
				why_join = @club_member.why_join
				goal = @club_member.goal
				UserMailer.new_member_confirmation(email, first_name, last_name).deliver
				
				if @club_member.save
				@success_join = true
				redirect_to root_path
				end
			else	
				# Send the e-mail
				first_name = params['first_name']
				last_name = params['last_name']
				email = params['email']
				message = params['message']
				UserMailer.contact_confirmation(email, first_name, last_name, message).deliver
				@success_contact = true
				redirect_to root_path
			end
	
  end

  def meet
  	@club_member = ClubMember.new
  end

	private

	    # Never trust parameters from the scary internet, only allow the white list through.
	    def club_member_params
	      params.require(:club_member).permit(:first_name, :last_name, :email, :major, :commitment, :why_join, :goal)
	    end

  
end
