using Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace Database
{
    public class MoviesContext : DbContext
    {
        public MoviesContext(DbContextOptions options) : base(options)
        {
        }

        public MoviesContext() : base()
        {
        }

        public virtual DbSet<Film> Films { get; set; }
        public virtual DbSet<Actor> Actors { get; set; }
        public virtual DbSet<ActorFilm> ActorFilm { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Director> Directors { get; set; }
        public virtual DbSet<Genre> Genres { get; set; }
        public virtual DbSet<Post> Posts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Film>()
            .HasOne(x => x.Director)
            .WithMany(x => x.Films)
            .HasForeignKey(x => x.DirectorId);

        modelBuilder.Entity<Film>()
            .HasOne(x => x.Country)
            .WithMany(x => x.Films)
            .HasForeignKey(x => x.CountryId);

        modelBuilder.Entity<Film>()
            .HasMany(x => x.Actors)
            .WithMany(x => x.Films)
            .UsingEntity<ActorFilm>(
            l => l.HasOne(p => p.Actor).WithMany().HasForeignKey(p => p.ActorId),
            r => r.HasOne(p => p.Film).WithMany().HasForeignKey(p => p.FilmId));

        modelBuilder.Entity<Film>()
            .HasOne(x => x.Genre)
            .WithMany(x => x.Films)
            .HasForeignKey(x => x.GenreId);

        modelBuilder.Entity<Post>()
            .HasOne(x => x.Film)
            .WithMany(x => x.Posts)
            .HasForeignKey(x => x.FilmId);

       modelBuilder.Entity<Actor>()
           .Property(x => x.ImageUrl)
           .HasDefaultValue(false)
           .IsRequired(true);

        base.OnModelCreating(modelBuilder);
    }
}
}
