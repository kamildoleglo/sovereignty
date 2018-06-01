Rails.application.routes.draw do
  resources :games
  root to: 'visitors#index'
  get 'maps/render' => 'maps#render_map'
  resources :maps
  devise_for :users
  resources :users
  mount ActionCable.server, at: '/cable'
end
