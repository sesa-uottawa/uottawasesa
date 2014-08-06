class ClubMember < ActiveRecord::Base
attr_accessible :first_name, :last_name, :email, :major, :commitment, :why_join, :goal

validates :first_name, presence: true, format: {with: /[a-zA-Z]*/, message: "only allow letters"}
validates :last_name, presence: true, format: {with: /[a-zA-Z]*/, message: "only allow letters"}
validates :email, uniqueness: true, format: {with: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/, message: "invalid format"}


end
