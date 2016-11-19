Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'

  devise_for :users
  root "static_pages#home"

  namespace :static_pages, path: '/', as: nil do
    get 'join'
    get 'events'
    get 'members'
    get 'code_of_conduct'
    get 'contact'
    get 'firstyearadvice'
    get 'alumni'
  end

  get 'advice/firstyear', to: 'static_pages#firstyearadvice'
  get 'advice/courses', to: 'static_pages#course_advice'

  # resource :applications, only: [:create]

  # get '/super/sekret/not/public/open-positions', to: 'static_pages#open_positions'

  post 'join', to: "static_pages#create"

  # get '/:startupweekend',
  #   to: "redirects#startup_link_2015",
  #   startupweekend: /2015(S|s)(T|t)(A|a)(R|r)(T|t)(U|u)(P|p)/

  # get '/:startupweekend',
    # to: "redirects#startup_link_2016",
    # startupweekend: /2016(S|s)(T|t)(A|a)(R|r)(T|t)(U|u)(P|p)/

  # get '/2015startup/count' => "redirects#startup_count"

  if Rails.env.production?
    get '*path' => redirect('/')
  end
end
