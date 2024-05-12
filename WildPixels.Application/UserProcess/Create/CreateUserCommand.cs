using MediatR;

namespace WildPixels.Application.UserProcess.Create
{
    public class CreateUserCommand : IRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }


        public CreateUserCommand(UserDTO user)
        {
            Name = user.Name;
            Email = user.Email;
            Password = user.Password;
        }
    }
}
