using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WildPixels.Core
{
    public interface IUserRepository
    {
        void Create(User user);
        void Update(User user);
        void Delete(int id);
        void Save();
    }
}
