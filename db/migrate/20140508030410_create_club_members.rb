class CreateClubMembers < ActiveRecord::Migration
  def change
    create_table :club_members do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, unique: true
      t.string :major
      t.text :commitment
      t.text :why_join
      t.text :goal
    end
  end
end
