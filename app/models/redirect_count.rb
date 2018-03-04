class RedirectCount < ActiveRecord::Base

  def increment
    self.count = 0 if self.count.nil?
    self.count += 1
  end
end
