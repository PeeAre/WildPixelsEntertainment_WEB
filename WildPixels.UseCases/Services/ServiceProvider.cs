using WildPixels.Web.Services.Common;

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
        public static void AddSendersService(this IServiceCollection services)
        {
            services.AddTransient<TelegramSender>();
        }
    }
}
