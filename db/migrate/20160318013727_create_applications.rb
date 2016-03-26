class CreateApplications < ActiveRecord::Migration[5.0]
  def change
    create_table :applications do |t|
      t.string :firstName
      t.string :lastName
      t.string :faculty
      t.string :programOfStudy
      t.string :email
      t.text :commitments
      t.string :linkedInUrl
      t.string :githubUrl
      t.text :whyGoodCandidate
      t.string :resumeUrl
      t.text :additionalInfo

      t.timestamps
    end
  end
end
