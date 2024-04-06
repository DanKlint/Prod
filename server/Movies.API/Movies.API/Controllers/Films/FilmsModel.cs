using Database.Entities;
using Movies.API.Controllers.Countries;
using Movies.API.Controllers.Directors;
using Movies.API.Controllers.Genres;
using System.ComponentModel.DataAnnotations;

namespace Movies.API.Controllers.Films
{
    public class FilmsModel
    {
        public int Id { get; set; }

        public string FilmName { get; set; }

        public string Description { get; set; }

        public int Year { get; set; }

        public string PreviewImageUrl { get; set; }

        public int DurationInMinutes { get; set; }

        public GenreModel Genre { get; set; }

        public DirectorModel Director { get; set; }

        public CountryModel Country { get; set; }
    }
}
