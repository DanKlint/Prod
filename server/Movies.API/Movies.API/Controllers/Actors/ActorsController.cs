﻿using Database;
using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Movies.API.Controllers.Actors
{
    public class ActorsController : ControllerBase
    {
        private readonly MoviesContext _context;

        public ActorsController(MoviesContext context)
        {
            _context = context;
        }

        [HttpGet("api/actors/list")]
        public async Task<IActionResult> GetActorsAsync([FromQuery]int? filmId)
        {
            var query = _context.Actors
                .AsNoTracking();

            if (filmId != null)
            {
                query = query.Where(x => x.Films.Any(f => f.Id == filmId));
            }

            var actors = await query
                .Select(x => new ActorModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    Surname = x.Surname,
                    Description = x.Description,
                    BirthDate = x.BirthDate,
                    ImageUrl = x.ImageUrl
                })
                .ToListAsync();

            return Ok(actors);
        }

        [HttpGet("api/actors/{actorId::int}/details")]
        public async Task<IActionResult> GetActorsAsync([FromRoute]int actorId)
        {
            return Ok(await _context.Actors
                .AsNoTracking()
                .Where(x => x.Id == actorId)
                .Select(x => new ActorModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    Surname = x.Surname,
                    Description = x.Description,
                    BirthDate = x.BirthDate,
                    ImageUrl = x.ImageUrl
                })
                .SingleAsync());
        }

        [HttpPost("api/actors/create")]
        public async Task<IActionResult> CreateActorAsync([FromBody] ActorCreateModel actor)
        {
            var dbActor = new Actor
            {
                Name = actor.Name,
                Surname = actor.Surname,
                Description = actor.Description,
                BirthDate = DateOnly.Parse(actor.BirthDate),
                ImageUrl = actor.ImageUrl
            };

            _context.Actors.Add(dbActor);

            await _context.SaveChangesAsync();

            var response = new ActorModel
            {
                Id = dbActor.Id,
                Name = dbActor.Name,
                Surname = dbActor.Surname,
                Description = dbActor.Description,
                BirthDate = dbActor.BirthDate,
                ImageUrl = dbActor.ImageUrl
            };

            return Ok(response);
        }

        [HttpPut("api/actors/{actorId::int}/create")]
        public async Task<IActionResult> CreateActorAsync([FromRoute] int actorId, [FromBody] ActorUpdateModel model)
        {
            var actor = await _context.Actors
                .AsTracking()
                .Where(x => x.Id == actorId)
                .SingleOrDefaultAsync();

            if(actor == null)
            {
                return NotFound();
            }

            actor.Name = model.Name;
            actor.Surname = model.Surname;
            actor.ImageUrl = model.ImageUrl;
            actor.Description = model.Description;
            actor.BirthDate = DateOnly.Parse(model.BirthDate);

            await _context.SaveChangesAsync();

            var response = new ActorModel
            {
                Id = actor.Id,
                Name = actor.Name,
                Surname = actor.Surname,
                Description = actor.Description,
                BirthDate = actor.BirthDate,
                ImageUrl = actor.ImageUrl
            };

            return Ok(response);
        }

        [HttpDelete("api/actors/{actorId::int}")]
        public async Task<IActionResult> DeleteCountryAsync([FromRoute] int actorId)
        {
            await _context.Actors
                .Where(x => x.Id == actorId)
                .ExecuteDeleteAsync();

            return Ok();
        }

        [HttpPost("api/actors/{actorId::int}/attach/films/{filmId::int}")]
        public async Task<IActionResult> AttachActorToFilmAsync([FromRoute] int actorId, [FromRoute] int filmId)
        {
            var relation = new ActorFilm
            {
                ActorId = actorId,
                FilmId = filmId
            };

            _context.ActorFilm.Add(relation);

            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
