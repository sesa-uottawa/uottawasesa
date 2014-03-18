require 'spec_helper'

describe "event_posts/edit" do
  before(:each) do
    @event_post = assign(:event_post, stub_model(EventPost,
      :title => "MyString",
      :body => "MyText",
      :signature => "MyString"
    ))
  end

  it "renders the edit event_post form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", event_post_path(@event_post), "post" do
      assert_select "input#event_post_title[name=?]", "event_post[title]"
      assert_select "textarea#event_post_body[name=?]", "event_post[body]"
      assert_select "input#event_post_signature[name=?]", "event_post[signature]"
    end
  end
end
