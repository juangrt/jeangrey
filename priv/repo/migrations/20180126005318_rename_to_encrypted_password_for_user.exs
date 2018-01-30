defmodule Jeangrey.Repo.Migrations.RenameToEncryptedPasswordForUser do
  use Ecto.Migration

  def change do
    rename table(:users), :encrypt_password, to: :encrypted_password
  end
end
