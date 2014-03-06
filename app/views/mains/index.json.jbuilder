json.array!(@mains) do |main|
  json.extract! main, 
  json.url main_url(main, format: :json)
end