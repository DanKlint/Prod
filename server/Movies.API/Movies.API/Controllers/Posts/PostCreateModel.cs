namespace Movies.API.Controllers.Posts
{
    public class PostCreateModel
    {
        public string Title { get; set; }
        public string Text { get; set; }
        public string UrlLink { get; set; }
        public string ImageUrl { get; set; }
        public int? FilmId { get; set; }
    }
}
