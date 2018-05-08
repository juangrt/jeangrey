defmodule JeangreyWeb.Helpers.Controllers do
  import Plug.Conn
  import Phoenix.Controller

  def current_user(conn), do: Guardian.Plug.current_resource(conn)

end