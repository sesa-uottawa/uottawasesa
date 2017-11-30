class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :banner
      t.string :event
      t.string :facebook_url
      t.string :type

      t.timestamps
    end
  end
end
