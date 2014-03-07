json.array!(@event_posts) do |event_post|
  json.extract! event_post, :title, :body, :signature
  json.url event_post_url(event_post, format: :json)
end