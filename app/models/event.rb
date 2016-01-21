class Event < ActiveRecord::Base
  def set_event_banner(banner = {})
    self.banner, self.filename, self.mime_type = banner.values_at(:banner, :filename, :mime_type)
  end
end
