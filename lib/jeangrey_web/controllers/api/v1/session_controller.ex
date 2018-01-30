defmodule JeangreyWeb.Api.V1.SessionController do
  use JeangreyWeb, :controller
  alias Jeangrey.Auth
  alias Jeangrey.Accounts
  alias Jeangrey.Accounts.User
  alias Jeangrey.Auth.Guardian
  alias JeangreyWeb.Api.V1.ErrorView

  def login(conn, %{"email" => email, "password" => password}) do
    Auth.authenticate_user(email, password)
    |> login_reply(conn)
  end

  def logout(conn, _params) do
    pages = [%{title: "foo"}, %{title: "bar"}]
    json conn, pages
  end

  ###############################################################
  # Private Methods
  ###############################################################

  defp login_reply({:error, error}, conn), do: conn |> user_unauthorized
  defp login_reply({:ok, user}, conn) do
    conn
    |> Guardian.Plug.sign_in(user)
    |> render "login.json", %{}
  end

  defp user_unauthorized(conn) do
    conn
    |> put_status(:unauthorized)
    |> put_view(ErrorView)
    |> render("authentication.json", %{ status: "401" })
  end

  
end
