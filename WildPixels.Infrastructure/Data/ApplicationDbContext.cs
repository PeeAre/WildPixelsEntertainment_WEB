using Microsoft.EntityFrameworkCore;
using WildPixels.Core.Aggregates.UserAggregate;

namespace WildPixels.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}