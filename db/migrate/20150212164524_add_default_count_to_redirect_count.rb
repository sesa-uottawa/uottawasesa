class AddDefaultCountToRedirectCount < ActiveRecord::Migration
  def change
    change_column :redirect_counts, :count, :integer, :default => 0
  end
end
