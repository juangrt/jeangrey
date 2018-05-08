defmodule Jeangrey.Content do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias Jeangrey.Repo
  alias Jeangrey.Content.Post
  alias Jeangrey.Accounts.User

  @doc """
  Returns the list of users.

  ## Examples

      iex> list_users()
      [%User{}, ...]

  """
  def create_post(user = %User{}, %{ "title" => title, "body" => body } ) do
    %Post{}
    |> Map.merge(%{title: title, body: body})
    |> Map.merge(%{user: user})
    |> Post.changeset(%{})
    |> Repo.insert!
  end

  def list_posts do
    Repo.all(Post)
  end

end
