using Microsoft.AspNetCore.Mvc;

namespace WildPixels.Web.Controllers
{
    public class LoginController : Controller
    {
        public LoginController() { }
        [HttpPost]
        public async Task<IActionResult> Registration([FromBody] User user)
        {
            return Ok();
        }
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            return Ok();
        }
    }
}
