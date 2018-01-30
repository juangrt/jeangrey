defmodule JeangreyWeb.Api.V1.ErrorView do
  use JeangreyWeb, :view


  def render("authentication.json", %{status: status}) do
    %{
      status: status,
      message: "Not Authenticated"
    }
  end

end