using Microsoft.EntityFrameworkCore;
using WildPixels.Infrastructure.Data;
using WildPixels.Infrastructure.Data.Models;

namespace WildPixels.Infrastructure.Services.Common
{
    public class DatabaseService
    {
        public void EnsurePopulated(AppDbContext dbContext)
        {
            if (dbContext.Database.GetPendingMigrations().Any())
            {
                dbContext.Database.Migrate();
            }

            if (!dbContext.Users.Any())
            {
                dbContext.Users.AddRange(
                    new UserDTO()
                    {
                        Name = "Admin",
                        Email = "silencetray@gmail.com"
                    });
            }
            dbContext.SaveChanges();
        }
    }
}
