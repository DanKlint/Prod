namespace Movies.API.Controllers.Films
{
    public class FilmCreateModel
    {
        public string FilmName { get; set; }

        public string Description { get; set; }

        public int Year { get; set; }

        public string PreviewImageUrl { get; set; }

        public int DurationInMinutes { get; set; }

        public int GenreId { get; set; }

        public int DirectorId { get; set; }

        public int CountryId { get; set; }
    }
}
