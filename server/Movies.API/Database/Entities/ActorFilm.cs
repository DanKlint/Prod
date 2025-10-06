using System.ComponentModel.DataAnnotations;

namespace Database.Entities
{
    public class ActorFilm
    {
        [Key]
        public int Id { get; set; }

        public Actor Actor { get; set; }
        [Required]
        public int ActorId { get; set; }

        public Film Film { get; set; }
        [Required]
        public int FilmId { get; set; }
    }
}
