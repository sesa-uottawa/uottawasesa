require "spec_helper"

describe EventPostsController do
  describe "routing" do

    it "routes to #index" do
      get("/event_posts").should route_to("event_posts#index")
    end

    it "routes to #new" do
      get("/event_posts/new").should route_to("event_posts#new")
    end

    it "routes to #show" do
      get("/event_posts/1").should route_to("event_posts#show", :id => "1")
    end

    it "routes to #edit" do
      get("/event_posts/1/edit").should route_to("event_posts#edit", :id => "1")
    end

    it "routes to #create" do
      post("/event_posts").should route_to("event_posts#create")
    end

    it "routes to #update" do
      put("/event_posts/1").should route_to("event_posts#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/event_posts/1").should route_to("event_posts#destroy", :id => "1")
    end

  end
end
