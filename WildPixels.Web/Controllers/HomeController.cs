using Microsoft.AspNetCore.Mvc;

namespace WildPixels.Web.Controllers
{
    public class HomeController : Controller
    {
        public HomeController()
        {
        }
        [HttpGet]
        public IActionResult Index()
        {
            ViewBag.Title = "Wild Pixels";

            return View();
        }
    }
}