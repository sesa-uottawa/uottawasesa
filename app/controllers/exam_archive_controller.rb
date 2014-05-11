class ExamArchiveController < ApplicationController

	def index
		@exam_archive = ExamArchive.new
		@club_member = ClubMember.new
	end

	def new
		@exam_archive = ExamArchive.new
		@club_member = ClubMember.new
	end

	def create 
		@exam_archive = ExamArchive.new(exam_archive_params)
		@exam_archive.save
		redirect_to root_path

	end

	def update
		@exam_archive = ExamArchive.find(params[:id])
		@exam_archive.update(exam_archive_params)
		redirect_to root_path

	end

	def destroy
		@exam_archive = ExamArchive.find(params[:id])
		@exam_archive.destroy
		redirect_to root_path
	end

	private

	def exam_archive_params
		params.require(:exam_archive).permit( :course_name, :exam, :exam_year, :season)
	end
end
