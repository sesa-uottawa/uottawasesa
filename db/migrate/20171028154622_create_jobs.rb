class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :position
      t.string :company
      t.string :location
      t.string :type
      t.string :description
      t.string :contact
      t.string :url
      
      t.timestamps
    end
  end
end
