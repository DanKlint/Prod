using Database;
using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Movies.API.Controllers.Genres
{
    public class GenresController : ControllerBase
    {
        private readonly MoviesContext _context;

        public GenresController(MoviesContext context)
        {
            _context = context;
        }

        [HttpGet("api/genres/list")]
        public async Task<IActionResult> GetGenresAsync()
        {
            return Ok(await _context.Genres
                .AsNoTracking()
                .Select(x => new GenreModel
                {
                    Id = x.Id,
                    Name = x.Name
                })
                .ToListAsync());
        }

        [HttpPost("api/genres/create")]
        public async Task<IActionResult> CreateGenreAsync([FromBody] GenreCreateModel Genre)
        {
            var dbGenre = new Genre
            {
                Name = Genre.Name.Trim()
            };

            _context.Genres.Add(dbGenre);

            await _context.SaveChangesAsync();

            var response = new GenreModel
            {
                Id = dbGenre.Id,
                Name = dbGenre.Name
            };

            return Ok(response);
        }

        [HttpDelete("api/genres/{genreId::int}")]
        public async Task<IActionResult> DeleteCountryAsync([FromRoute] int genreId)
        {
            var anyFilms = await _context.Films.Where(x => x.GenreId == genreId).AnyAsync();

            if (anyFilms)
            {
                return BadRequest("Для данного жанра есть фильмы!");
            }

            await _context.Genres
                .Where(x => x.Id == genreId)
                .ExecuteDeleteAsync();

            return Ok();
        }
    }
}
