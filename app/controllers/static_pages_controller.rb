class StaticPagesController < ApplicationController
  
  def home  
    @club_member = ClubMember.new
  end  

  def join
  	@club_member = ClubMember.new
  end

  def create

	@club_member = ClubMember.new(club_member_params)

	@club_member.valid?

	if @club_member.save
    	flash.now[:successful_join] = "You've successfully joined!"
		render 'join'
	else
		render 'join'
	end

	UserMailer.new_member_confirmation(@club_member.email, @club_member.first_name, @club_member.last_name).deliver
		
  end

	private

	    # Never trust parameters from the scary internet, only allow the white list through.
	    def club_member_params
	      params.require(:club_member).permit(:first_name, :last_name, :email, :major, :commitment, :why_join, :goal)
	    end

  
end
