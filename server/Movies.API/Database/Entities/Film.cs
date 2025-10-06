using System.ComponentModel.DataAnnotations;

namespace Database.Entities
{
    public class Film
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FilmName { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Year { get; set; }
        [Required]
        public int DurationInMinutes { get; set; }
        [Required]
        public string PreviewImageUrl { get; set; }

        [Required]
        public int GenreId { get; set; }
        public Genre Genre { get; set; }

        [Required]
        public int DirectorId { get; set; }
        public Director Director { get; set; }

        [Required]
        public int CountryId { get; set; }
        public Country Country { get; set; }

        public List<Actor> Actors { get; set; }

        public List<Post> Posts { get; set; }
    }
}
