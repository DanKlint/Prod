using Database;
using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Movies.API.Controllers.Countries
{
    public class CountriesController : ControllerBase
    {
        private readonly MoviesContext _context;

        public CountriesController(MoviesContext context)
        {
            _context = context;
        }

        [HttpGet("api/countries/list")]
        public async Task<IActionResult> GetCountriesAsync()
        {
            return Ok(await _context.Countries
                .AsNoTracking()
                .Select(x => new CountryModel
                {
                    Id = x.Id,
                    Name = x.Name
                })
                .ToListAsync());
        }

        [HttpPost("api/countries/create")]
        public async Task<IActionResult> CreateCountryAsync([FromBody] CountryCreateModel country)
        {
            var dbCountry = new Country
            {
                Name = country.Name.Trim()
            };

            _context.Countries.Add(dbCountry);

            await _context.SaveChangesAsync();

            var response = new CountryModel
            {
                Name = dbCountry.Name,
                Id = dbCountry.Id
            };

            return Ok(response);
        }

        [HttpDelete("api/countries/{countryId::int}")]
        public async Task<IActionResult> DeleteCountryAsync([FromRoute]int countryId)
        {
            var anyFilms = await _context.Films.Where(x => x.CountryId == countryId).AnyAsync();

            if (anyFilms)
            {
                return BadRequest("Для данной страны есть фильмы!");
            }

            await _context.Countries
                .Where(x => x.Id == countryId)
                .ExecuteDeleteAsync();

            return Ok();
        }
    }
}
