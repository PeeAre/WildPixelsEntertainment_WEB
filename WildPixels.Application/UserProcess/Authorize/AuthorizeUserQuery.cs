using MediatR;

namespace WildPixels.Application.UserProcess.Authorize
{
    public class AuthorizeUserQuery : IRequest<bool>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }


        public AuthorizeUserQuery(UserDTO user)
        {
            Name = user.Name;
            Email = user.Email;
            Password = user.Password;
        }
    }
}
