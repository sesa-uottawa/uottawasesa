require 'spec_helper'

describe "event_posts/index" do
  before(:each) do
    assign(:event_posts, [
      stub_model(EventPost,
        :title => "Title",
        :body => "MyText",
        :signature => "Signature"
      ),
      stub_model(EventPost,
        :title => "Title",
        :body => "MyText",
        :signature => "Signature"
      )
    ])
  end

  it "renders a list of event_posts" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "Signature".to_s, :count => 2
  end
end
