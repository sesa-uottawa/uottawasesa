Uottawasesa::Application.routes.draw do

  root "static_pages#home"

  get "/join" => "static_pages#join", as: 'join'
  post "/join" => "static_pages#create"
  get "/firstyearadvice" => "static_pages#firstyearadvice", as: 'firstyearadvice'
  get "/events" => "static_pages#events", as: 'events'
  get "/members" => "static_pages#members", as: 'members'

  resources :exam_archive
  
  get '/:startupweekend', 
    to: "redirects#startup_link", 
    startupweekend: /2015(S|s)(T|t)(A|a)(R|r)(T|t)(U|u)(P|p)/

  get '/2015startup/count' => "redirects#startup_count"

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
