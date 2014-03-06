require 'spec_helper'

describe "mains/edit" do
  before(:each) do
    @main = assign(:main, stub_model(Main))
  end

  it "renders the edit main form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", main_path(@main), "post" do
    end
  end
end
