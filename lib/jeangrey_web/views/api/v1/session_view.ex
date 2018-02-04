defmodule JeangreyWeb.Api.V1.SessionView do
  use JeangreyWeb, :view


  def render("login.json", _) do
    %{
      success: true,
      info: "Logged In",
      redirect_url: "/admin"
    }
  end

end