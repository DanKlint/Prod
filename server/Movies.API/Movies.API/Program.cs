
using Database;
using Microsoft.EntityFrameworkCore;

namespace Movies.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var connectionString = builder.Configuration.GetConnectionString("MoviesDb")
    ?? throw new ArgumentNullException();

            builder.Services.AddDbContext<MoviesContext>(
                opt => opt.UseNpgsql(connectionString));

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
                options.AddPolicy("AllPolicy", policy =>
                {
                    policy.AllowAnyOrigin();
                    policy.AllowAnyHeader();
                    policy.AllowAnyMethod();
                })
            );

            var app = builder.Build();

            app.UseCors("AllPolicy");

            using var scope = app.Services.CreateScope();
            {
                var context = scope.ServiceProvider.GetRequiredService<MoviesContext>();

                //context.Database.EnsureCreated();
                context.Database.Migrate();
            }

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
