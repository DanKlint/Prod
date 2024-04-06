﻿using Database;
using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Movies.API.Controllers.Films
{
    public class FilmsController : ControllerBase
    {
        private readonly MoviesContext _context;

        public FilmsController(MoviesContext context)
        {
            _context = context;
        }

        [HttpGet("api/movies/list")]
        public async Task<IActionResult> GetMoviesAsync(
            [FromQuery] int? countryId,
            [FromQuery] int? directorId,
            [FromQuery] int? genreId,
            [FromQuery] int? year,
            [FromQuery] string search)
        {
            var query = _context.Films.AsNoTracking();

            if(countryId != null)
            {
                query = query.Where(x => x.CountryId == countryId);
            }

            if(directorId != null)
            {
                query = query.Where(x => x.DirectorId == directorId);
            }

            if (genreId != null)
            {
                query = query.Where(x => x.GenreId == genreId);
            }

            if (year != null)
            {
                query = query.Where(x => x.Year == year);
            }

            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(x => EF.Functions.Like(x.FilmName.ToLower(), "%" + search.ToLower() + "%"));
            }

            var filmsResponse = await query
               .Select(x => new FilmsModel
               {
                   Id = x.Id,
                   FilmName = x.FilmName,
                   Description = x.Description,
                   Country = new Countries.CountryModel
                   {
                       Id = x.Country.Id,
                       Name = x.Country.Name,
                   },
                   Director = new Directors.DirectorModel
                   {
                       Id = x.Director.Id,
                       Firstname = x.Director.FirstName,
                       Surname = x.Director.Surname,
                   },
                   DurationInMinutes = x.DurationInMinutes,
                   Genre = new Genres.GenreModel
                   {
                       Id = x.Genre.Id,
                       Name = x.Genre.Name
                   },
                   PreviewImageUrl = x.PreviewImageUrl,
                   Year = x.Year
               }).ToListAsync();

            return Ok(filmsResponse);
        }

        [HttpGet("api/movies/{movieId::int}/details")]
        public async Task<IActionResult> GetMovieDetailsAsync([FromRoute] int movieId)
        {
            var movie = await _context.Films
                .AsNoTracking()
                .Where(x => x.Id == movieId)
                .Select(x => new FilmsModel
                {
                    Id = x.Id,
                    FilmName = x.FilmName,
                    Description = x.Description,
                    Country = new Countries.CountryModel
                    {
                        Id = x.Country.Id,
                        Name = x.Country.Name,
                    },
                    Director = new Directors.DirectorModel
                    {
                        Id = x.Director.Id,
                        Firstname = x.Director.FirstName,
                        Surname = x.Director.Surname,
                    },
                    DurationInMinutes = x.DurationInMinutes,
                    Genre = new Genres.GenreModel
                    {
                        Id = x.Genre.Id,
                        Name = x.Genre.Name
                    },
                    PreviewImageUrl = x.PreviewImageUrl,
                    Year = x.Year
                }).SingleOrDefaultAsync();

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }

        [HttpDelete("api/movies/{movieId::int}/delete")]
        public async Task<IActionResult> DeleteMovieAsync([FromRoute]int movieId)
        {
            var anyPosts = await _context.Posts.AnyAsync(x => x.FilmId == movieId);

            if (anyPosts)
            {
                return BadRequest("Для фильма существуют посты!");
            }

            await _context.Films.Where(x => x.Id == movieId)
                .ExecuteDeleteAsync();

            return Ok();
        }

        [HttpPost("api/movies/create")]
        public async Task<IActionResult> CreateMovieAsync([FromBody] FilmCreateModel model)
        {
            var dbMovie = new Film
            {
                FilmName = model.FilmName,
                Description = model.Description,
                CountryId = model.CountryId,
                DirectorId = model.DirectorId,
                GenreId = model.GenreId,
                DurationInMinutes = model.DurationInMinutes,
                PreviewImageUrl = model.PreviewImageUrl,
                Year = model.Year
            };

            _context.Films.Add(dbMovie);

            await _context.SaveChangesAsync();

            var response = new FilmsModel
            {
                Id = dbMovie.Id,
                FilmName = dbMovie.FilmName,
                Description = dbMovie.Description,
                Country = new Countries.CountryModel
                {
                    Id = dbMovie.Country.Id,
                    Name = dbMovie.Country.Name,
                },
                Director = new Directors.DirectorModel
                {
                    Id = dbMovie.Director.Id,
                    Firstname = dbMovie.Director.FirstName,
                    Surname = dbMovie.Director.Surname,
                },
                DurationInMinutes = dbMovie.DurationInMinutes,
                Genre = new Genres.GenreModel
                {
                    Id = dbMovie.Genre.Id,
                    Name = dbMovie.Genre.Name
                },
                PreviewImageUrl = dbMovie.PreviewImageUrl,
                Year = dbMovie.Year
            };
            return Ok(response);
        }
    }
}