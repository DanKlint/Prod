using System.ComponentModel.DataAnnotations;

namespace Database.Entities
{
    public class Genre
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public List<Film> Films { get; set; }
    }
}
