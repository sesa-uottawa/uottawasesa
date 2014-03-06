require "spec_helper"

describe MainsController do
  describe "routing" do

    it "routes to #index" do
      get("/mains").should route_to("mains#index")
    end

    it "routes to #new" do
      get("/mains/new").should route_to("mains#new")
    end

    it "routes to #show" do
      get("/mains/1").should route_to("mains#show", :id => "1")
    end

    it "routes to #edit" do
      get("/mains/1/edit").should route_to("mains#edit", :id => "1")
    end

    it "routes to #create" do
      post("/mains").should route_to("mains#create")
    end

    it "routes to #update" do
      put("/mains/1").should route_to("mains#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/mains/1").should route_to("mains#destroy", :id => "1")
    end

  end
end
