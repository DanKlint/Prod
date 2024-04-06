namespace Movies.API.Controllers.Actors
{
    public class ActorCreateModel
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Description { get; set; }
        public DateOnly BirthDate { get; set; }
    }
}
