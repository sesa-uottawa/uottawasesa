require 'spec_helper'

describe "event_posts/show" do
  before(:each) do
    @event_post = assign(:event_post, stub_model(EventPost,
      :title => "Title",
      :body => "MyText",
      :signature => "Signature"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Title/)
    rendered.should match(/MyText/)
    rendered.should match(/Signature/)
  end
end
