Rails.application.routes.draw do
  root to: 'visitors#index'
  mount ActionCable.server, at: '/cable'
  get 'maps/render' => 'maps#render_map'
  resources :maps
  devise_for :users
  resources :users
end
