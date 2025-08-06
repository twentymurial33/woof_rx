public class Pet
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Species { get; set; } = "";
    public string Breed { get; set; } = "";
    public DateTime Birthday { get; set; }

    public int UserId { get; set; }
    public User? Owner { get; set; }
}
