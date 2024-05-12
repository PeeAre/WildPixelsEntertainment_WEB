using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;
using WildPixels.Application.UserProcess;
using WildPixels.Infrastructure.Data;
using WildPixels.Infrastructure.Services;

namespace WildPixels.Web
{
    public class Startup
    {
        private IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(Configuration["ConnectionStrings:MSSQL_Connection"]);
            }, ServiceLifetime.Transient);
            //var asm = AppDomain.CurrentDomain.GetAssemblies().
            //    SingleOrDefault(assembly => assembly.GetName().Name == "WildPixels.Application");
            services.AddMediatR(config => config.RegisterServicesFromAssemblyContaining(typeof(UserDTO)));
            services.AddUnitOfWork();
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
                app.UseExceptionHandler("/Error");
            }

            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action}/{id?}");
            });
            app.UseHttpsRedirection();
            app.UseCors(corsPolicyBuilder => corsPolicyBuilder.AllowAnyOrigin()
                                                              .AllowAnyMethod()
                                                              .AllowAnyHeader());
        }
    }
}
