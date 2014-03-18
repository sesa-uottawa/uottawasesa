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
	
	def has_signature(signature)
		by = "by"
		if signature.empty?
			#do nothing
		else
			"#{by} #{signature}"
		end
	end

	def markdown(text)
		markdownparser = Redcarpet::Markdown.new(Redcarpet::Render::HTML, :autolink => true, :space_after_headers => true)
		markdownparser.render(text).html_safe
	end

	def markdown_filter(text)
    	Kramdown::Document.new(text).to_html.html_safe
  	end

end
