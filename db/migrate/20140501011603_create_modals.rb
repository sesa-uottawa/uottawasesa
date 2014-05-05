class CreateModals < ActiveRecord::Migration
  def change
    create_table :modals do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :major
      t.text :commitment
      t.text :why_join
      t.text :goal
      t.timestamps
    end
  end
end
