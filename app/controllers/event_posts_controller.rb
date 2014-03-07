class EventPostsController < ApplicationController
  before_action :set_event_post, only: [:show, :edit, :update, :destroy]

  # GET /event_posts
  # GET /event_posts.json
  def index
<<<<<<< HEAD
    @event_posts = EventPost.all
=======
    @event_post = EventPost.all
>>>>>>> e76346baca1631257bdc6cf582805901445e761e
  end

  # GET /event_posts/1
  # GET /event_posts/1.json
  def show
<<<<<<< HEAD
=======
    @set_event_post
>>>>>>> e76346baca1631257bdc6cf582805901445e761e
  end

  # GET /event_posts/new
  def new
    @event_post = EventPost.new
  end

  # GET /event_posts/1/edit
  def edit
<<<<<<< HEAD
=======
    @set_event_post
>>>>>>> e76346baca1631257bdc6cf582805901445e761e
  end

  # POST /event_posts
  # POST /event_posts.json
  def create
    @event_post = EventPost.new(event_post_params)

    if @event_post.save
      redirect_to @event_post
    else
<<<<<<< HEAD
      #do nothing
=======
      # DO SOMETHING ELSE
>>>>>>> e76346baca1631257bdc6cf582805901445e761e
    end

  end

  # PATCH/PUT /event_posts/1
  # PATCH/PUT /event_posts/1.json
  def update
<<<<<<< HEAD
    @event_post = EventPost.new(event_post_params)  

      if @event_post.update(event_post_params)
        redirect_to @event_post
      else
        #do nothing
      end
  
=======
    @set_event_post

    if @event_post.update(event_post_params)
      redirect_to @event_post
    else
      # DO SOMETHING ELSE
    end
>>>>>>> e76346baca1631257bdc6cf582805901445e761e
  end

  # DELETE /event_posts/1
  # DELETE /event_posts/1.json
  def destroy
<<<<<<< HEAD
=======
    @set_event_post
>>>>>>> e76346baca1631257bdc6cf582805901445e761e
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
<<<<<<< HEAD
end
=======
end
>>>>>>> e76346baca1631257bdc6cf582805901445e761e
