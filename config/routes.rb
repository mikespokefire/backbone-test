BackboneTest::Application.routes.draw do
  resources :cards
  root to: 'home#index'
end
