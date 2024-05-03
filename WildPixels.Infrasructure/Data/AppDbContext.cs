using Microsoft.EntityFrameworkCore;
using WildPixels.Infrastructure.Data.Models;

namespace WildPixels.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<UserDTO> Users { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
    }
}