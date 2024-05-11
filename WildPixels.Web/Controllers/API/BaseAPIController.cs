using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Nodes;

namespace Legalex.Web.Controllers.API
{
    [ApiController]
    [Route("[controller]")]
    abstract public class BaseApiController : ControllerBase, IBaseAPI
    {
        [HttpPost]
        public abstract Task<IActionResult> Create(JsonObject model);

        [HttpPut]
        public abstract Task<IActionResult> Update(string id);

        [HttpGet]
        public abstract Task<IActionResult> Get(string id);

        [HttpDelete]
        public abstract Task<IActionResult> Delete(string id);


    }
}
