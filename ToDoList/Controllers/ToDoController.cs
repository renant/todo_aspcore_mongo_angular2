using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ToDoList.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {

        private IMongoCollection<ToDo> todo;

        public ToDoController(MongoClient client)
        {
            var database = client.GetDatabase("mongodbdotnetcore");
            todo = database.GetCollection<ToDo>(nameof(todo));
        }

        // GET: api/values
        [HttpGet("[action]")]
        public async Task<IList<ToDo>> TodoList(DateTime? date)
        {
            if(!date.HasValue)
                date = DateTime.Now;

            var query = Builders<ToDo>.Filter.Eq("Date", date.Value.Date.ToUniversalTime());
            
            var todolist = await todo.FindAsync(query);

            return todolist.ToList();
        }

        // POST api/values
        [HttpPost("[action]")]
        public async Task Create([FromBody]ToDo newTodo)
        {
            await todo.InsertOneAsync(newTodo);
        }

        // PUT api/values/5
        [HttpPost("[action]")]
        public async Task ChangeStatus([FromBody]ToDo edit)
        {
            var update = Builders<ToDo>.Update.Set(x => x.Done, edit.Done);
            await todo.UpdateOneAsync(x => x.Id == edit.Id, update);
        }

        // DELETE api/values/5
        [HttpDelete("[action]/{id}")]
        public async Task Delete(string id)
        {
            await todo.DeleteOneAsync(x => x.Id == id);
        }
    }
}
