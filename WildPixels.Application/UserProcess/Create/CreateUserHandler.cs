using MediatR;
using WildPixels.Core.Aggregates;
using WildPixels.Core.Aggregates.UserAggregate;

namespace WildPixels.Application.UserProcess.Create
{
    public class CreateUserHandler : IRequestHandler<CreateUserCommand>
    {
        private IUnitOfWork _unitOfWork;


        public CreateUserHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public Task Handle(CreateUserCommand command, CancellationToken cancellationToken)
        {
            var user = new User(name: command.Name, email: command.Email, password: command.Password);

            _unitOfWork.Users.Create(user);
            _unitOfWork.Save();

            return Task.CompletedTask;
        }
    }
}
