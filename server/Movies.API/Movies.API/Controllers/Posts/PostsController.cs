using Database;
using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Movies.API.Controllers.Posts
{
    public class PostsController : ControllerBase
    {
        private readonly MoviesContext _context;

        public PostsController(MoviesContext context)
        {
            _context = context;
        }

        [HttpGet("api/posts/list")]
        public async Task<IActionResult> GetPostsAsync()
        {
            return Ok(await _context.Posts
                .AsNoTracking()
                .Select(x => new {
                    Id = x.Id,
                    Title = x.Title,
                    ImageUrl = x.ImageUrl,
                    UrlLink = x.UrlLink,
                    Text = x.Text,
                    FilmId = x.FilmId,
                    FilmName = x.Film.FilmName
                    }
                )
                .Select(x => new PostModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    ImageUrl = x.ImageUrl,
                    UrlLink = x.UrlLink,
                    Text = x.Text,
                    Film = new FilmSimpleModel
                    {
                        Id = x.FilmId,
                        Name = x.FilmName
                    }
                })
                .ToListAsync());
        }

        [HttpPost("api/posts/create")]
        public async Task<IActionResult> CreatePostAsync([FromBody] PostCreateModel post)
        {
            if (post.FilmId != null)
            {
                var filmName = await _context.Films.Where(x => x.Id == post.FilmId).Select(x => x.FilmName).SingleOrDefaultAsync();

                if (string.IsNullOrEmpty(filmName))
                {
                    return BadRequest("Фильм не существует!");
                }
            }
            var dbPost = new Post
            {
                Title = post.Title,
                ImageUrl = post.ImageUrl,
                Text = post.Text,
                UrlLink = post.UrlLink,
                FilmId = post.FilmId,
            };

            _context.Posts.Add(dbPost);

            await _context.SaveChangesAsync();

            var response = new PostModel
            {
                Id = dbPost.Id,
                Title = dbPost.Title,
                ImageUrl = dbPost.ImageUrl,
                UrlLink = dbPost.UrlLink,
                Text = dbPost.Text,
                Film = new FilmSimpleModel
                {
                    Id = dbPost.FilmId,
                    Name = filmName
                }
            };

            return Ok(response);
        }

        [HttpDelete("api/posts/{postId::int}")]
        public async Task<IActionResult> DeletePostAsync([FromRoute] int postId)
        {
            await _context.Posts
                .Where(x => x.Id == postId)
                .ExecuteDeleteAsync();

            return Ok();
        }
    }
}
