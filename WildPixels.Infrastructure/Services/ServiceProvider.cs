using Microsoft.Extensions.DependencyInjection;
using WildPixels.Core.Aggregates;

namespace WildPixels.Infrastructure.Services
{
    public static class ServiceProvider
    {
        public static void AddUnitOfWork(this IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }
    }
}
