using WildPixels.Infrastructure.Data.Models;

namespace WildPixels.Infrastructure.Data
{
    public interface IAppRepository
    {
        IQueryable<UserDTO> Profiles { get; }

        void UpdateContext();
        Task SaveChangesAsync();
    }
}