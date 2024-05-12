using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Nodes;
using WildPixels.Application.UserProcess;
using WildPixels.Application.UserProcess.Create;
using WildPixels.Web.Controllers.API;

namespace WildPixels.Web.Controllers
{
    public class UserController : BaseApiController
    {
        private IMediator _mediator;


        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        public override async Task<IActionResult> Create(JsonObject model)
        {
            if (model == null || !model.Any())
                return BadRequest("Model is null or empty");

            var userDTO = JsonSerializer.Deserialize<UserDTO>(model);

            if (userDTO == null)
                return BadRequest("Model invalid");

            await _mediator.Send(new CreateUserCommand(userDTO));

            return Ok();
        }

        public override Task<IActionResult> DeleteById(string id)
        {
            throw new NotImplementedException();
        }

        public override Task<IActionResult> GetAll()
        {
            throw new NotImplementedException();
        }

        public override Task<IActionResult> Update()
        {
            throw new NotImplementedException();
        }
    }
}
