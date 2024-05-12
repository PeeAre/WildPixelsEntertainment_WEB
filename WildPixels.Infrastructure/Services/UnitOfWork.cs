using Microsoft.EntityFrameworkCore;
using WildPixels.Core.Aggregates;
using WildPixels.Core.Aggregates.UserAggregate;
using WildPixels.Infrastructure.Data;
using WildPixels.Infrastructure.Data.Repositories;

namespace WildPixels.Infrastructure.Services
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly UserRepository _userRepository;
        public IUserRepository Users { get => _userRepository; }


        public UnitOfWork(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            _userRepository = new UserRepository(dbContext);

            InitialDatabase();
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
            _dbContext.Dispose();
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }

        private void InitialDatabase()
        {
            if (_dbContext.Database.GetPendingMigrations().Any())
                _dbContext.Database.Migrate();

            var user = new User("Tima", "some@email.com", "12345");
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
        }
    }
}
