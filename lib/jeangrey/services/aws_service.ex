defmodule Jeangrey.Services.AwsService do
  alias ExAws.S3
  @moduledoc """
  AwsService For Uploading files to S3
  """

  @doc """
  
  """
  defp wxBASE_CDN_URL, do: Application.get_env(:jeangrey, Jeangrey.Services.AwsService)[:cdn_base]
  defp wxAWS_BUCKET, do: Application.get_env(:jeangrey, Jeangrey.Services.AwsService)[:aws_bucket] 
  
  defp wxVALID_CONTENT_TYPES, do: ["image/jpeg", "image/gif", "image/png"]
  
  defp file_hash(contents), do: :crypto.hash(:md5, contents) |> Base.encode16()
  defp file_extension(content_type), do: List.first(MIME.extensions(content_type))

  defp destination_path(filename), do: "assets/#{filename}"
  defp generate_filename(contents, content_type), do: "#{file_hash(contents)}.#{file_extension(content_type)}"

  defp valid_content_type?(content_type), do: Enum.member?(wxVALID_CONTENT_TYPES(), content_type)

  defp verify_file(file) do
    unless valid_content_type?(file.content_type) do
      raise ArgumentError, message: "Invalid Content-Type #{file.content_type}"
    end
    file
  end

  def send_to_s3(file) do
    data = File.read!(file.path)
    filename = data |> generate_filename(file.content_type)

    opts = %{ content_type: file.content_type, acl: { :public_read } }

    S3.put_object("jeangrey-dev", destination_path(filename), data, opts)
    |> ExAws.request!

    %{ path: "#{wxBASE_CDN_URL}/#{filename}" }
  end

  def upload(file) do
    verify_file(file)
    |> send_to_s3
  end


end


