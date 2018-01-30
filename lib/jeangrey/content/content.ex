defmodule Jeangrey.Content do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias Jeangrey.Repo
  alias Jeangrey.Content.Post

  @doc """
  Returns the list of users.

  ## Examples

      iex> list_users()
      [%User{}, ...]

  """
  def create_post(params) do
    post_params = Map.new(params, fn {k, v} -> {String.to_atom(k), v} end)
    post = Map.merge(%Post{}, post_params)
    changeset = Post.changeset(post, %{})
    Repo.insert!(changeset)
  end

  def list_post do
    Repo.all(Post)
  end

end
