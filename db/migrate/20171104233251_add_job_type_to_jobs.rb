class AddJobTypeToJobs < ActiveRecord::Migration[5.0]
  def change
    add_column :jobs, :job_type, :string
  end
end
