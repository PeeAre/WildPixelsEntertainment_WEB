using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Nodes;

namespace Legalex.Web.Controllers.API
{
    public interface IBaseAPI
    {
        public Task<IActionResult> Create(JsonObject model);
        public Task<IActionResult> Update(string id);
        public Task<IActionResult> Get(string id);
        public Task<IActionResult> Delete(string id);
    }
}
