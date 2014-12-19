module ApplicationHelper
	
	def markdown(text)
		markdownparser = Redcarpet::Markdown.new(Redcarpet::Render::HTML, :autolink => true, :space_after_headers => true)
		markdownparser.render(text).html_safe
	end

	def markdown_filter(text)
    	Kramdown::Document.new(text).to_html.html_safe
  	end

end
