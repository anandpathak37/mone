Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admin_users, ActiveAdmin::Devise.config
  #resources :pages
  resources :users
 
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#index'

  get :index, :to => 'pages#index'
  get :about, :to => 'pages#about'
  get :blockchain, :to => 'pages#blockchain'
  get :blog, :to => 'pages#blog'
  get :career, :to => 'pages#career'
  get :contact, :to => 'pages#contact'

  get :partner, :to => 'pages#partner'
  get :portfolio, :to => 'pages#portfolio'
  get :service, :to => 'pages#service'
  get :service_detail, :to => 'pages#service_detail'
  get :contact, :to => 'pages#contact'
  
end
