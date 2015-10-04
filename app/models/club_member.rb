class ClubMember < ActiveRecord::Base
  validates :first_name, presence: true, format: {with: /\A[a-zA-Z]*\z/, message: "only allowed letters"}
  validates :last_name, presence: true, format: {with: /\A[a-zA-Z]*\z/, message: "only allowed letters"}
  validates :email, uniqueness: true, format: {with: /\A.+@.+\z/, message: "invalid format"}
end
