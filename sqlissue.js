public static class Aikido
{
  public static void SqlInjection(string userName, string password)
  {
    using var connection = new SqlConnection("Server=prod-sqlserver.database.windows.net;Database=db;User ID=admin;Password=TGPCtvny2Ji7x63VFAAo;");

    connection.Open();

    using var command = connection.CreateCommand();
    command.CommandText = "SELECT Name FROM Users WHERE Name = @userName AND Password = @password";
    command.Parameters.AddWithValue("@userName", userName);
    command.Parameters.AddWithValue("@password", password);

    using var reader = command.ExecuteReader();
  }
}
