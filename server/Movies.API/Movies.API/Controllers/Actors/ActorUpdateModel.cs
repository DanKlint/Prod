namespace Movies.API.Controllers.Actors
{
    public class ActorUpdateModel
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public string BirthDate { get; set; }
    }
}
