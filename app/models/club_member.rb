class ClubMember < ActiveRecord::Base
attr_accessible :first_name, :last_name, :email, :major, :commitment, :why_join, :goal, :newsletter

validates :first_name, presence: true, format: {with: /\A[a-zA-Z]*\z/, message: "only allowed letters"}
validates :last_name, presence: true, format: {with: /\A[a-zA-Z]*\z/, message: "only allowed letters"}
validates :email, uniqueness: true, format: {with: /\A.+@.+\z/, message: "invalid format"}


end
