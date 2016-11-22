using MongoDB.Bson;

namespace ToDoList.Models
{
    public class ToDo
    {
        public ObjectId Id { get; set; }
        public string Description { get; set; }
        public bool Done { get; set; }
    }
}