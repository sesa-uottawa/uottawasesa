class Event <ActiveRecord:: Base
  validates :name, presence: true, format: {with: /\A[a-zA-Z0-9a]*\z/, message: "only allowed letters, numbers and _"}
  validates :image, presence: true
  validates :email, uniqueness: true, format: {with: /\A.+@.+\z/, message: "invalid format"}
end
