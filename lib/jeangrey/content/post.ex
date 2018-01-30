defmodule Jeangrey.Content.Post do
  use Ecto.Schema
  import Ecto.Changeset
  alias Jeangrey.Accounts.User
  alias Jeangrey.Content.Post


  schema "posts" do
    field :body, :string
    field :title, :string
    belongs_to :user, User

    timestamps()
  end

  @doc false
  def changeset(%Post{} = post, attrs) do
    post
    |> cast(attrs, [:title, :body])
    |> validate_required([:title, :body, :user])
  end
end
