source 'https://rubygems.org'
ruby '1.9.3'

require 'rbconfig'

gem 'listen'
gem 'wdm', '>=0.1.0' if RbConfig::CONFIG['target_os'] =~ /mswin|mingw/i

gem 'rails', '4.0.2'
gem 'pg', '0.15.1'
gem 'bootstrap-sass', '2.3.2.0'
gem 'sass', '3.2.13'
gem 'protected_attributes', '1.0.5'
gem 'thin'
gem 'devise'
gem 'sprockets', '2.11.0'
gem 'slim', '2.0.0'
gem 'redcarpet', "~> 3.1.1"



group :development do
	gem 'pry'
end

group :development, :test do
  gem 'rspec-rails', '2.13.1'
  gem 'guard-rspec', '2.5.0'
  gem 'spork-rails', '4.0.0'
  gem 'guard-spork', '1.5.0'
  gem 'childprocess', '0.3.6'
end

group :test do
  gem 'selenium-webdriver', '2.35.1'
  gem 'capybara', '2.1.0'
end

gem 'sass-rails', '4.0.1'
gem 'uglifier', '2.1.1'
gem 'coffee-rails', '4.0.1'
gem 'jquery-rails', '3.0.4'
gem 'jquery-ui-rails'
gem 'turbolinks', '1.1.1'
gem 'jbuilder', '1.0.2'

group :doc do
  gem 'sdoc', '0.3.20', require: false
end

group :production do
  gem 'rails_12factor', '0.0.2'
end 