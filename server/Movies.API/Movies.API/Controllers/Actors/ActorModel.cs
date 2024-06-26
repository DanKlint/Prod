﻿namespace Movies.API.Controllers.Actors
{
    public class ActorModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public DateOnly BirthDate { get; set; }
    }
}
