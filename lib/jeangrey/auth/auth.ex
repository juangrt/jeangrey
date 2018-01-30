defmodule Jeangrey.Auth do
  @moduledoc """
  The Auth context.
  """

  import Ecto.Query, warn: false
  alias Jeangrey.Repo

  alias Jeangrey.Accounts.User
  alias Comeonin.Bcrypt

  @doc """
  Searches the database for a user with the matching username, then
  checks that encrypting the plain text password matches in the
  encrypted password that was stored during user creation.
  """
  def authenticate_user(email, plain_text_password) do
    query = from u in User, where: u.email == ^email
    Repo.one(query)
    |> Bcrypt.check_pass(plain_text_password)
  end

end
