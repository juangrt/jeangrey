defmodule JeangreyWeb.Api.V1.UserView do
  use JeangreyWeb, :view


  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email,
      password: user.encrypted_password,
      updated_at: user.updated_at
    }
  end

end