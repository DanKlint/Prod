using System.ComponentModel.DataAnnotations;

namespace Database.Entities
{
    public class Director
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }

        public List<Film> Films { get; set; }
    }
}
