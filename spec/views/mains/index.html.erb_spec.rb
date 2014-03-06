require 'spec_helper'

describe "mains/index" do
  before(:each) do
    assign(:mains, [
      stub_model(Main),
      stub_model(Main)
    ])
  end

  it "renders a list of mains" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
  end
end
