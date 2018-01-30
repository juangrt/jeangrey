defmodule JeangreyWeb.Api.V1.PostView do
  use JeangreyWeb, :view


  def render("post.json", %{post: post}) do
    %{
      id: post.id,
      title: post.title,
      body: post.body,
      updated_at: post.updated_at
    }
  end

end