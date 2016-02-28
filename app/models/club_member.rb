class ClubMember < ActiveRecord::Base
  validates :first_name, presence: true, format: {with: /\A[a-zA-Z]*\z/, message: "only allowed letters"}
  validates :last_name, presence: true, format: {with: /\A[a-zA-Z]*\z/, message: "only allowed letters"}
  validates :email, uniqueness: true, format: {with: /\A.+@.+\z/, message: "invalid format"}

  def self.to_csv(options = {})
    CSV.generate(options) do |csv|
      csv << ["Email"]
      all.each do |club_member|
        csv << [club_member.email]
      end
    end
  end
  
end
