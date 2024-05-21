using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Nodes;

namespace WildPixels.Web.Controllers.BaseControllers
{
    [ApiController]
    [Route("[controller]")]
    public abstract class BaseIdentityController : ControllerBase
    {
        [HttpPost]
        public abstract Task<IActionResult> Login(JsonObject model);
    }
}
