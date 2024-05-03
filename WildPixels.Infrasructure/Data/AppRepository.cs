using WildPixels.Infrastructure.Data.Models;

namespace WildPixels.Infrastructure.Data
{
    public class AppRepository : IAppRepository, IDisposable
    {
        private readonly AppDbContext _context;

        public AppRepository(AppDbContext context)
        {
            _context = context;
        }
        public IQueryable<UserDTO> Profiles => _context.Users;
        public async Task SaveChangesAsync() => await _context.SaveChangesAsync();
        public void UpdateContext() => _context.ChangeTracker.Entries()
            .ToList().ForEach(e => e.Reload());
        public void Dispose() => _context.Dispose();
    }
}