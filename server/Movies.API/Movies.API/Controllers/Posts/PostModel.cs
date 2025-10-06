namespace Movies.API.Controllers.Posts
{
    public class PostModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string UrlLink { get; set; }
        public string ImageUrl { get; set; }
        public FilmSimpleModel? Film { get; set; }
    }

    public class FilmSimpleModel
    {
        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
