using MediatR;
using WildPixels.Core.Aggregates;

namespace WildPixels.Application.UserProcess.Authorize
{
    public class AuthorizeUserHandler : IRequestHandler<AuthorizeUserQuery, bool>
    {
        private IUnitOfWork _unitOfWork;


        public AuthorizeUserHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public Task<bool> Handle(AuthorizeUserQuery request, CancellationToken cancellationToken)
        {
            var users = _unitOfWork.Users.GetAll();
            var isAuthorized = users.Any(x =>
                (x.Email == request.Email || x.Name == request.Name) && x.Password == request.Password);

            return Task.FromResult(isAuthorized);
        }
    }
}
