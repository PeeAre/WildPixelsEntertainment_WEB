using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Nodes;
using WildPixels.Application.UserProcess;
using WildPixels.Application.UserProcess.Authorize;
using WildPixels.Web.Controllers.BaseControllers;

namespace WildPixels.Web.Controllers
{
    public class IdentityController : BaseIdentityController
    {
        private IMediator _mediator;


        public IdentityController(IMediator mediator)
        {
            _mediator = mediator;
        }
        public override async Task<IActionResult> Login(JsonObject model)
        {
            if (model == null || !model.Any())
                return BadRequest("Model is null or empty");

            var userDTO = JsonSerializer.Deserialize<UserDTO>(model);

            if (userDTO == null)
                return BadRequest("Model invalid");

            var isAuthorized = await _mediator.Send(new AuthorizeUserQuery(userDTO));

            return isAuthorized ? Ok() : BadRequest("User was not authorized");
        }
    }
}
