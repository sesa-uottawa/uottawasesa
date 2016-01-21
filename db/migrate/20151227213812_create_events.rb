class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string    :name,          null: false
      t.string    :description
      t.string    :facebook_link
      t.binary    :banner,        limit: 10.megabytes
      t.string    :filename
      t.string    :mime_type
      t.datetime  :event_date
    t.timestamps                null: false
    end
  end
end
