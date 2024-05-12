using WildPixels.Core.Aggregates.UserAggregate;

namespace WildPixels.Core.Aggregates
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }

        void Save();
    }
}
