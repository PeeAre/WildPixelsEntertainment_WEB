using WildPixels.Infrastructure.Data;
using WildPixels.Infrastructure.Data.Models;

namespace WildPixels.Web.Services.Common
{
    public class DatabaseService
    {
        public void EnsurePopulated(AppDbContext dbContext)
        {
            //if (dbContext.Database.GetPendingMigrations().Any())
            //{
            //    dbContext.Database.Migrate();
            //}

            if (!dbContext.Profiles.Any())
            {
            }
            dbContext.SaveChanges();
        }
    }
}
