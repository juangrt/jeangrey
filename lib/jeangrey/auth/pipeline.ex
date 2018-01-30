defmodule Jeangrey.Auth.Pipeline do
  use Guardian.Plug.Pipeline,
    otp_app: :jeangrey,
    error_handler: Jeangrey.Auth.ErrorHandler,
    module: Jeangrey.Auth.Guardian

  plug Guardian.Plug.VerifySession, claims: %{"typ" => "access"}
  plug Guardian.Plug.VerifyHeader, claims: %{"typ" => "access"}
  plug Guardian.Plug.LoadResource, allow_blank: true
end
