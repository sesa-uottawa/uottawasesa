class CreateMains < ActiveRecord::Migration
  def change
    create_table :mains do |t|

      t.timestamps
    end
  end
end
