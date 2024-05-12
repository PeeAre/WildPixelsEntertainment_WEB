using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Nodes;

namespace WildPixels.Web.Controllers.API
{
    [ApiController]
    [Route("[controller]")]
    abstract public class BaseApiController : ControllerBase, IBaseAPI
    {
        [HttpPost]
        public abstract Task<IActionResult> Create(JsonObject model);

        [HttpPut]
        public abstract Task<IActionResult> Update();

        [HttpGet]
        public abstract Task<IActionResult> GetAll();

        [HttpDelete]
        public abstract Task<IActionResult> DeleteById(string id);


    }
}
