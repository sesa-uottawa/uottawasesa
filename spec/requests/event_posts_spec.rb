require 'spec_helper'

describe 'EventPosts' do
  describe 'GET /event_posts' do
    it 'works! (now write some real specs)' do
      # Run the generator again with the --webrat
      # flag if you want to use webrat methods/matchers
      get event_posts_path
      response.status.should be(200)
    end
  end
end
