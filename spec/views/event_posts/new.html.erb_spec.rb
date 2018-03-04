require 'spec_helper'

describe "event_posts/new" do
  before(:each) do
    assign(:event_post, stub_model(EventPost,
      :title => "MyString",
      :body => "MyText",
      :signature => "MyString"
    ).as_new_record)
  end

  it "renders new event_post form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", event_posts_path, "post" do
      assert_select "input#event_post_title[name=?]", "event_post[title]"
      assert_select "textarea#event_post_body[name=?]", "event_post[body]"
      assert_select "input#event_post_signature[name=?]", "event_post[signature]"
    end
  end
end
