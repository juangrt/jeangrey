defmodule JeangreyWeb.Api.V1.PostController do
  use JeangreyWeb, :controller
  alias Jeangrey.Content

  def index(conn, _params) do
    pages = [%{title: "foo"}, %{title: "bar"}]
    json conn, pages
  end

  def show(conn, _params) do
    render conn, "index.html"
  end

  def create(conn, params) do
    post = Content.create_post(params)
    render conn, "post.json" , %{ post: post }
  end

  def update(conn, _params) do
    render conn, "index.html"
  end

  def delete(conn, _params) do
    render conn, "index.html"
  end

end
