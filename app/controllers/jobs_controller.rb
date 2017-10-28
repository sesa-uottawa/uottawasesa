class JobsController < ApplicationController

def index
    @job = Job.all
  end
def create
  @job= Job.new(job_params)
 
 if @job.save
    redirect_to @job
  else
    render 'new'
  end
end
def show
    @job = Job.find(params[:id])
end
 def new
 	@job = Job.new
 end
 
private
  def job_params
    params.require(:job).permit(:position, :company, :url)
  end
end
