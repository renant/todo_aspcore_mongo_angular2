using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using ToDoList.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {
        // GET: api/values
        [HttpGet("[action]")]
        public IEnumerable<ToDo> TodoList()
        {
            var todolist = new List<ToDo>
            {
                new ToDo()
                {
                    Id = new ObjectId(),
                    Description = "teste"
                },
                new ToDo()
                {
                    Id = new ObjectId(),
                    Description = "teste2"
                }
            };

            return todolist;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
