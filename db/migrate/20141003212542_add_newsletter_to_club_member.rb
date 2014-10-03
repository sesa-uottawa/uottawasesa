class AddNewsletterToClubMember < ActiveRecord::Migration
  def change
    add_column :club_members, :newsletter, :boolean
  end
end
