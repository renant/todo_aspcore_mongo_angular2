﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;

namespace ToDoList.Mongo
{

    public static class MongoSupport
    {
        public static void AddMongo(this IServiceCollection services, IConfigurationSection configuration)
        {
            services.AddSingleton(new MongoClient(configuration.GetSection("ConnectionString").Value));
        }
    }

}