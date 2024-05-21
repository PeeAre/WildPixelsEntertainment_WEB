using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Nodes;

namespace WildPixels.Web.Controllers.BaseControllers
{
    public interface IBaseAPI
    {
        public Task<IActionResult> Create(JsonObject model);
        public Task<IActionResult> Update();
        public Task<IActionResult> GetAll();
        public Task<IActionResult> DeleteById(string id);
    }
}
