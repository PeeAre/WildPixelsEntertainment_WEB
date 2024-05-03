using WildPixels.Core.Models;

namespace WildPixels.Core.Repository
{
    public interface IUserRepository
    {
        Task Create(User user);
        Task DeleteById(int id);
        Task<User> GetById(int id);
        Task<User> GetByName(string name);
        Task<List<User>> GetAll();
    }
}
