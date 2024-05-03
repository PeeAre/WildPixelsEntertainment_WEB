using Microsoft.Extensions.DependencyInjection;
using WildPixels.Infrastructure.Services.Common;

namespace WildPixels.Web.Services
{
    public static class ServiceProvider
    {
        public static void AddDatabaseService(this IServiceCollection services)
        {
            services.AddSingleton<DatabaseService>();
        }
        public static void AddNotificationService(this IServiceCollection services)
        {
            services.AddSingleton<NotificationService>();
        }
    }
}
