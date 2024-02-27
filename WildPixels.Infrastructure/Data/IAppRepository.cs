using WildPixels.Infrastructure.Data.Models;

namespace WildPixels.Infrastructure.Data
{
    public interface IAppRepository : IDisposable
    {
        IQueryable<Profile> Profiles { get; }

        void UpdateContext();
        Task SaveChangesAsync();
    }
}