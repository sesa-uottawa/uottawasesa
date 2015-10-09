source 'https://rubygems.org'
ruby '2.2.1'

require 'rbconfig'

gem 'wdm', '>=0.1.0' if RbConfig::CONFIG['target_os'] =~ /mswin|mingw/i

gem 'rails', '4.2.0'
gem 'pg'
gem 'foundation-rails', '5.3.1.0'
gem 'sass', '>=3.2.13'
gem 'thin'
gem 'sprockets', '>=2.11.0'
gem 'aws-sdk'
gem 'sass-rails', '>=4.0.1'
gem 'uglifier', '>=2.1.1'
gem 'jquery-rails', '>=3.0.4'
gem 'jquery-ui-rails'
gem 'turbolinks', '>=1.1.1'
gem 'jbuilder', '>=1.0.2'
gem 'actionview-encoded_mail_to'

group :development do
	gem 'pry'
end

group :production do
  gem 'rails_12factor', '>=0.0.2'
end 
