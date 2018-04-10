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
  def edit
  @job = Job.find(params[:id])
 end
 def update
  @job = Job.find(params[:id])
 if @job.update(job_params)
    redirect_to @job
  else
    render 'new'
  end
 end
 def destroy
  @job = Job.find(params[:id])
  @job.destroy
  redirect_to jobs_path
end
private
  def job_params
    params.require(:job).permit(:position, :company, :location, :job_type, :description, :contact, :url)
  end
end
