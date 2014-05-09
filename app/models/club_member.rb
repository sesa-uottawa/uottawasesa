class ClubMember < ActiveRecord::Base
attr_accessible :first_name, :last_name, :email, :major, :commitment, :why_join, :goal

validates :first_name, presence: true
validates :last_name, presence: true
validates :email, presence: true, uniqueness: true
validates :commitment, presence: true
validates :why_join, presence: true
validates :goal, presence: true

end
