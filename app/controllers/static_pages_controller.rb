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

  def events
    @events = [
      {:banner => 'events_2016/feb_html_css_js_tut.jpg',
        :event => 'HTML5/JavaScript/CSS Workshop',
        :facebook_url => 'https://www.facebook.com/events/1513986038908447/'},
      {:banner => 'events_2016/jan_mockups.jpg',
        :event => 'SESA Programming Mock Interviews 2016',
        :facebook_url => 'https://www.facebook.com/events/213332235677274/'},
      {:banner => 'events_2015/12012015_WebAppPreview.png',
        :event => 'Web App Tutorial Preview - Winter 2016',
        :facebook_url => 'https://www.facebook.com/events/1725731107645805/'},
      {:banner => 'events_2015/shopify_fall_2015_event_banner.jpg',
        :event => 'Shopify on Campus - Winternships are Coming!',
        :facebook_url => 'https://www.facebook.com/events/552764481544976/'},
      {:banner => 'IBMHackathon.jpg',
        :event => 'IBM Hackathon',
        :facebook_url => 'https://www.facebook.com/events/1040902412611160/'},
      {:banner => 'Google_Talk_October_2015.jpg',
        :event => 'Google Talk',
        :facebook_url => 'https://www.facebook.com/events/1161529577209002/'},
      {:banner => 'events_2015/shopify_fall_2015_event_banner.jpg',
        :event => 'Shopify Winternship Talk',
        :facebook_url => 'https://www.facebook.com/events/758756164250040/'},
      {:banner => 'GoogleIO15.jpg',
        :event => 'Google I/O Extended',
        :facebook_url => 'https://www.facebook.com/events/872090266182143/'},
      {:banner => 'GoogleMapsTalk.jpg',
        :event => 'Google Maps Talk Banner',
        :facebook_url => 'https://www.facebook.com/events/696751373767860/'},
      {:banner => 'RoR_Winter2015.jpg',
        :event => 'Ruby on Rails Winter 2015 Tutorial Banner',
        :facebook_url => 'https://www.facebook.com/events/778999418859343/?ref=2&ref_dashboard_filter=past'},
      {:banner => 'coding_competition.jpg',
        :event => 'Coding Competition Banner',
        :facebook_url => 'Coding Competition Banner'},
      {:banner => 'startup-weekend-banner.jpg',
        :event => 'Startup Weekend UOttawa Banner',
        :facebook_url => 'https://www.facebook.com/events/774386012655259/?ref_dashboard_filter=upcoming'},
      {:banner => 'shopify_coop_talk_banner.jpg',
        :event => 'Shopify Coop Talk Banner',
        :facebook_url => 'https://www.facebook.com/events/1525471497740725/?ref_dashboard_filter=past'},
      {:banner => 'Mock_Interviews_Winter2015.jpg',
        :event => 'Programming Mockup Interviews Winter 2015',
        :facebook_url => 'https://www.facebook.com/events/324991577708081/?ref=2&ref_dashboard_filter=past'},
      {:banner => 'legacy.jpg',
        :event => 'Legacy Conference Fall 2014',
        :facebook_url => 'https://www.facebook.com/events/712288775553750/?ref_dashboard_filter=past'},
      {:banner => 'elads-event.jpg',
        :event => 'Business Card Design Workshop Banner',
        :facebook_url => 'https://www.facebook.com/events/307282269474878/?ref_dashboard_filter=past'},
      {:banner => 'sitebannerevent.jpg',
        :event => 'Tech Talk',
        :facebook_url => 'https://www.facebook.com/events/732469863508791/?ref_dashboard_filter=past'},
      {:banner => 'Photoshop_Workshop_Fall2014.jpg',
        :event => 'Photoshop Workshop Banner',
        :facebook_url => 'https://www.facebook.com/events/433031483502586/?ref_dashboard_filter=past'},
      {:banner => 'ruby_tutorial_banner.jpg',
        :event => 'Ruby on Rails Tutorial Banner',
        :facebook_url => 'https://www.facebook.com/events/521381771297707/?ref_dashboard_filter=past'},
      {:banner => 'meetNgreet_Fall2014.jpg',
        :event => 'Meet and Greet Fall 2014 Banner',
        :facebook_url => 'https://www.facebook.com/events/1475488029380249/?ref_dashboard_filter=past'},
      {:banner => 'barbecuebanner1.jpg',
        :event => 'Barbecue Banner',
        :facebook_url => 'https://www.facebook.com/events/255970374595125/?ref=2&ref_dashboard_filter=past'},
      {:banner => '2DJava.jpg',
        :event => '2D Java Game',
        :facebook_url => 'https://www.facebook.com/events/491126517732587/'}]
  end

  def members
    if user_signed_in?
      @club_members = ClubMember.all

      respond_to do |format|
        format.html 
        format.csv {send_data @club_members.to_csv, filename: "sesa_members.csv"}
      end
    else
      redirect_to root_path, alert: "You are not authorized"
    end
  end

  private
    def club_member_params
      params.require(:club_member).permit(:first_name, :last_name, :email,
        :major, :commitment, :why_join, :goal, :newsletter)
    end
end
