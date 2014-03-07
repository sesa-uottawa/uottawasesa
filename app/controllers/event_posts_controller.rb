class EventPostsController < ApplicationController
  before_action :set_event_post, only: [:show, :edit, :update, :destroy]

  # GET /event_posts
  # GET /event_posts.json
  def index

    @event_posts = EventPost.all

  end

  # GET /event_posts/1
  # GET /event_posts/1.json
  def show
  end

  # GET /event_posts/new
  def new
    @event_post = EventPost.new
  end

  # GET /event_posts/1/edit
  def edit
  end

  # POST /event_posts
  # POST /event_posts.json
  def create
    @event_post = EventPost.new(event_post_params)

    if @event_post.save
      redirect_to @event_post
    else
      #DO NOTHING
    end

  end

  # PATCH/PUT /event_posts/1
  # PATCH/PUT /event_posts/1.json
  def update

    @event_post = EventPost.new(event_post_params)  

      if @event_post.update(event_post_params)
        redirect_to @event_post
      else
        #do nothing
      end
  
  end

  # DELETE /event_posts/1
  # DELETE /event_posts/1.json
  def destroy
    @event_post.destroy
    redirect_to event_posts_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_post
      @event_post = EventPost.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_post_params
      params.require(:event_post).permit(:title, :body, :signature)
    end
end