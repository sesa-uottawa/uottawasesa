class RedirectsController < ApplicationController

  def startup_link_2015
    count = RedirectCount.where("name = ?", :startup_weekend)[0]

    if count.nil?
      count = RedirectCount.new
      count.name = :startup_weekend
    end

    count.increment
    count.save

    redirect_to "http://www.up.co/communities/canada/ottawa/startup-weekend/5406"
  end

  def startup_count
    count = RedirectCount.where("name = ?", :startup_weekend)[0]

    if count.nil?
      flash[:notice] = "Number of redirects so far is 0"
    else
      flash[:notice] = "Number of redirects so far is #{count.count}"
    end

    redirect_to :root
  end

  def startup_link_2016
    redirect_to "http://www.up.co/communities/canada/ottawa-gatineau/startup-weekend/8359"
  end

end
