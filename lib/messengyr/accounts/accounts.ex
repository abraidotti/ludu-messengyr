defmodule Messengyr.Accounts do

  import Ecto.Changeset
  alias Messengyr.Accounts.User
  alias Messengyr.Repo

  # Pattern match to create the password
  def create_user(%{"password" => password} = params) do

    # Encrypt password with Comeonin
    encrypted_password = Comeonin.Bcrypt.hashpwsalt(password)

    register_changeset(params)
    |> Repo.insert
  end

  def register_changeset(params \\ %{}) do
    %User{}
    |> cast(params, [:username, :email, :password])
    |> validate_required([:username, :email, :password])
    |> unique_constraint(:email)
    |> unique_constraint(:username)
    |> validate_format(:email, ~r/@/)
    |> validate_format(:username, ~r/^[a-zA-Z0-9]*$/)
    |> validate_length(:password, min: 4)
  end

end
