Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :new, :update, :destroy, :show]
  resources :users, only: [:create, :index, :show]
  post '/login', to: 'users#login'
  get '/persist', to: 'users#persist'
end
