class CreateRedirectCounts < ActiveRecord::Migration
  def change
    create_table :redirect_counts do |t|
      t.string :name, limit: 30
      t.integer :count

      t.timestamps null: false
    end
  end
end
