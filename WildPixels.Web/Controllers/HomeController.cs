using Microsoft.AspNetCore.Mvc;

namespace WildPixels.Web.Controllers
{
    public class User
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }

    public class HomeController : Controller
    {
        public HomeController()
        {
        }
        [HttpGet]
        public string Index()
        {
            return "Wild Pixels";
        }
    }
}