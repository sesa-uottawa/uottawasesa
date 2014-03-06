require 'spec_helper'

describe "mains/show" do
  before(:each) do
    @main = assign(:main, stub_model(Main))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
  end
end
