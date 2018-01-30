defmodule JeangreyWeb.Api.V1.SessionView do
  use JeangreyWeb, :view


  def render("login.json", _) do
    %{
      success: true,
      info: "Logged In",
      login_landing_page: "/admin"
    }
  end

end