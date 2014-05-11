class ExamArchive < ActiveRecord::Base

attr_accessible :course_name, :exam, :exam_year, :season
has_attached_file :exam,
				  :storage => :s3,
				  :s3_credentials => Proc.new{|a| a.instance.s3_credentials }


def s3_credentials
	{:bucket => ENV['AWS_BUCKET_NAME'],
    :access_key_id => ENV['AWS_ACCESS_KEY'],
    :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY'] }
end

def all_course_name

	arr = Array.new
	exam_archive = ExamArchive.all

	exam_archive.each do | exam_archive |
		unless arr.include? exam_archive.course_name
			arr.push(exam_archive.course_name)
		end
	end

	return arr
end

def all_exams_for_a_course(course_name_temp)

	arr_of_exams = Array.new
	arr = Array.new
	exam_archive = ExamArchive.all

	exam_archive.each do | exam_archive |
		if exam_archive.course_name.eql? course_name_temp
			arr_of_exams.push(exam_archive.exam_file_name)
		end
	end

	exam_archive.each do | exam_archive |
		if arr_of_exams.include? exam_archive.exam_file_name
			arr.push("#{exam_archive.exam_year} #{exam_archive.season}")
		end
	end

	return arr.sort
end

validates_attachment_content_type :exam, :content_type => ['application/pdf', 'application/msword', 'text/plain']

end
