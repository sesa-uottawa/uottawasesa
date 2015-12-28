class CreateExamArchives < ActiveRecord::Migration
  def change
    create_table :exam_archives do |t|
    	t.string :course_name
    	t.integer :exam_year
    	t.string :season
    	# t.attachment :exam
    end
  end
end
