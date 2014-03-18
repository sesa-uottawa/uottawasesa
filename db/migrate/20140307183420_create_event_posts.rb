class CreateEventPosts < ActiveRecord::Migration
  def change
    create_table :event_posts do |t|
      t.string :title
      t.text :body
      t.string :signature

      t.timestamps
    end
  end
end
