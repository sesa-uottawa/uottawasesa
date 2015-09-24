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
        flash[:successful_join] = "You've successfully joined!"
        UserMailer.new_member_confirmation(@club_member.email, 
          @club_member.first_name, @club_member.last_name).deliver
        redirect_to join_path
    else
      render 'join'
    end
  end

  def firstyearadvice; end

  def events; end

  def members
    @club_members = ClubMember.all
  end
  
  private
    def club_member_params
      params.require(:club_member).permit(:first_name, :last_name, :email, 
        :major, :commitment, :why_join, :goal, :newsletter)
    end
end
