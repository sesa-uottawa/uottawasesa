class Event <ActiveRecord:: Base
  validates :title, presence: true, format: {with: /\A[a-zA-Z0-9a]*\z/, message: "only allowed letters, numbers and _"}

# !!!! Copy pasted code from http://stackoverflow.com/questions/7091816/rails-validation-of-image-simple-form
  validates :image_url, allow_blank: true, format: {
  with: %r{\.gif|jpg|png}i,
  message: 'must be a url for gif, jpg, or png image.'
}
#end of copied code
  validates :link, uniqueness: true, format: {with: /\A.+@.+\z/, message: "invalid format"}
end
