using System;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ToDoList.Models
{
    public class ToDo
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Description { get; set; }
        public bool Done { get; set; }
        public DateTime Date { get; set; }
    }
}