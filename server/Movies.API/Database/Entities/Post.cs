using System.ComponentModel.DataAnnotations;

namespace Database.Entities
{
    public class Post
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public string UrlLink { get; set; }
        [Required]
        public string ImageUrl { get; set; }

        public int? FilmId { get; set; }
        public Film Film { get; set; }
    }
}
