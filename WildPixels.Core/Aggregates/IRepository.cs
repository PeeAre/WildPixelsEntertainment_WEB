namespace WildPixels.Core.Aggregates
{
    public interface IRepository<T> where T : class
    {
        void Create(T item);
        IEnumerable<T> GetAll();
        T GetById(int id);
        T GetByName(string name);
        void Update();
        void Delete();
        void DeleteAll();
        void DeleteById(int id);
        void DeleteByName(string name);
    }
}
