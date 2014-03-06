require 'spec_helper'

describe "mains/new" do
  before(:each) do
    assign(:main, stub_model(Main).as_new_record)
  end

  it "renders new main form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", mains_path, "post" do
    end
  end
end
