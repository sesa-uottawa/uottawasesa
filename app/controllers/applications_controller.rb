class ApplicationsController < ApplicationController
  def create
    @application = Application.new(application_data)

    if @application.save
      # render json: @application, status: :created, location: @application
      render json: @application, status: :created
    else
      render json: { errors: 'Much Error. So Bad. Try Again Plz.' }, status: :unprocessable_entity
    end
  end

  private

    def permitted_application_params
      params.require(:data).permit(:type,
        attributes: [
         :firstName,
         :lastName,
         :faculty,
         :programOfStudy,
         :email,
         :commitments,
         :linkedInUrl,
         :githubUrl,
         :whyGoodCandidate,
         :resumeUrl,
         :additionalInfo
        ])
    end

    def application_data
      permitted_application_params[:attributes] || {}
    end
end
