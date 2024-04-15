using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Database.Entities
{
    public class Actor
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string ImageUrl { get; set; }
        [Required]
        public DateOnly BirthDate { get; set; }

        public List<Film> Films { get; set; }
    }
}
