module ApplicationHelper

	def full_title(pages_title)
		base_title = "SESA"
		if pages_title.empty?
			base_title
		else
			"#{base_title} | #{pages_title}"
		end
	end

	def admin?
		return true
	end
	
end
