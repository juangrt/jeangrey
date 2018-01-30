defmodule JeangreyWeb.Api.V1.UserController do
  use JeangreyWeb, :controller
  alias Jeangrey.Accounts

  plug :assign_user, nil when action in [:update, :show]

  def index(conn, _params) do
    pages = [%{title: "foo"}, %{title: "bar"}]
    json conn, pages
  end

  def show(conn, %{"id" => id}) do
    render conn, "user.json" , %{ user: conn.assigns[:user] }
  end

  def create(conn, params) do
    params = Map.new(params, fn {k, v} -> {String.to_atom(k), v} end)
    user = Accounts.create_user(params)
    render conn, "user.json" , %{ user: user }
  end

  def update(conn, %{ "password" => password }) do
    user = Accounts.update_user(conn.assigns[:user], %{password: password})
    render conn, "user.json" , %{ user: user }
  end

  def delete(conn, _params) do
    pages = [%{title: "foo"}, %{title: "bar"}]
    json conn, pages
  end

  defp assign_user(conn, msg) do
    assign(conn, :user, Accounts.get_user(%{id: conn.params["id"]}))
  end

end
