# Class to add to counter or set to 0
class RedirectCount < ActiveRecord::Base
  def increment
    self.count = 0 if count.nil?
    self.count += 1
  end
end
