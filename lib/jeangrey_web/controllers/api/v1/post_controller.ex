defmodule JeangreyWeb.Api.V1.PostController do
  use JeangreyWeb, :controller
  import JeangreyWeb.Helpers.Controllers
  alias Jeangrey.Content
  alias Jeangrey.Services.AwsService

  def index(conn, _params) do
    json conn, Content.list_posts()
  end

  def show(conn, _params) do
    render conn, "index.html"
  end

  def create(conn, params) do
    post = conn |> current_user |> Content.create_post(params)
    render conn, "post.json" , %{ post: post }
  end

  def update(conn, _params) do
    render conn, "index.html"
  end

  def delete(conn, _params) do
    render conn, "index.html"
  end

  def upload(conn, %{"file" => file}) do
    response = AwsService.upload(file)
    json conn, response
  end

end
