defmodule JeangreyWeb.PageController do
  use JeangreyWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

end
