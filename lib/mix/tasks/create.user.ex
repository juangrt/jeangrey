defmodule Mix.Tasks.Create.User do
  use Mix.Task
  alias Jeangrey.Accounts

  @shortdoc "Creates a new user"

  @moduledoc """
    Creates a new user w/ params
    --email    | Unique Email of New User
    --password | Password for  New User
  """

  def run(args) do
    Mix.Task.run "app.start"
    case args |> parse_args |> process do
      {:ok, user} ->
        Mix.shell.info "User Successfullu created #{user.email}"
      {:error, changeset} ->
        Enum.each changeset.errors, fn ({key, {msg , _}}) -> 
          Mix.shell.info "#{key}:#{msg}"
        end
    end
  end

  # We can define other functions as needed here.
  def process([]) do
    Mix.shell.info "No arguments given"
  end

  def process(options) do
    Accounts.create_user(%{email: options[:email] , password: options[:password]})
  end

 defp parse_args(args) do
  {options, _, _} = OptionParser.parse(args, switches: [email: :string, password: :string])
  options
 end
end
