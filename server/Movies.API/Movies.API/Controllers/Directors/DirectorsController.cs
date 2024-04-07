using Database;
using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Movies.API.Controllers.Directors
{
    public class DirectorsController : ControllerBase
    {

        private readonly MoviesContext _context;

        public DirectorsController(MoviesContext context)
        {
            _context = context;
        }

        [HttpGet("api/directors/list")]
        public async Task<IActionResult> GetDirectorsAsync()
        {
            return Ok(await _context.Directors
                .AsNoTracking()
                .Select(x => new DirectorModel
                {
                    Id = x.Id,
                    Firstname = x.FirstName,
                    Surname = x.Surname
                })
                .ToListAsync());
        }

        [HttpPost("api/directors/create")]
        public async Task<IActionResult> CreateDirectorAsync([FromBody] DirectorCreateModel director)
        {
            var dbDirector = new Director
            {
                FirstName = director.Firstname.Trim(),
                Surname = director.Surname.Trim()
            };

            _context.Directors.Add(dbDirector);

            await _context.SaveChangesAsync();

            var response = new DirectorModel
            {
                Id = dbDirector.Id,
                Firstname = dbDirector.FirstName,
                Surname = dbDirector.Surname
            };

            return Ok(response);
        }

        [HttpDelete("api/directors/{directorId::int}")]
        public async Task<IActionResult> DeleteCountryAsync([FromRoute] int directorId)
        {
            var anyFilms = await _context.Films.Where(x => x.DirectorId == directorId).AnyAsync();

            if (anyFilms)
            {
                return BadRequest("Для данного режиссера есть фильмы!");
            }

            await _context.Directors
                .Where(x => x.Id == directorId)
                .ExecuteDeleteAsync();

            return Ok();
        }
    }
}
