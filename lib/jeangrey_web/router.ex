defmodule JeangreyWeb.Router do
  use JeangreyWeb, :router

  pipeline :auth do
    plug Jeangrey.Auth.Pipeline
  end

  pipeline :ensure_auth do
    plug Guardian.Plug.EnsureAuthenticated
  end

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :put_secure_browser_headers
  end

  scope "/", JeangreyWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api", JeangreyWeb , as: :api do
    pipe_through [:api , :auth, :ensure_auth]
    scope "/v1" , Api.V1, as: :v1 do
      resources "/users", UserController, only: [:show, :create, :update, :delete]
      resources "/posts", PostController, only: [:index, :show, :create, :update, :delete]
    end
  end

  # Other scopes may use custom stacks.
  scope "/api", JeangreyWeb , as: :api do
    pipe_through [:api , :auth]
    scope "/v1" , Api.V1, as: :v1 do
      post "/login", SessionController, :login
      post "/logout", SessionController, :logout
    end
  end


end
