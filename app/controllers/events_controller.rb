class EventsController < ApplicationController

  def new
    @event = Event.new
  end

  def destroy
  end

  def create
    banner, banner_filename, banner_content_type = nil

    if event_params[:banner]
      banner_data         = event_params.delete(:banner)
      banner              = Base64.encode64(banner_data.read)
      banner_filename     = banner_data.original_filename
      banner_content_type = banner_data.content_type
    end

    new_event = Event.new(event_params.except(:banner))
    new_event.set_event_banner(banner: banner, filename: banner_filename, mime_type: banner_content_type)

    respond_to do |format|
      if new_event.save
        format.html { redirect_to events_path }
      else
        format.html { render action: 'new' }
      end
    end
  end


  def show
    @events = Event.order(event_date: :desc)
  end

  private
    def event_params
      params.require(:event).permit(:name, :description, :facebook_link, :event_date, :banner)
    end
end
