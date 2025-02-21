This is the base node js project tempelate, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations.

`src` --> Inside the source folder all the actual source code regarding the project will reside, this will not include any kind of tests. (There will be a separate test folder for this).

Let's take a look inside the `src` folder

 - `config` --> In this folder anything and everything regarding any configurations or setup of a library or module will be done . For example : setting up `dotenv` so that we can use the environment variables in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library sould also be done here.

 - `routes` --> in the routes folder we register a route and the corresponding middleware and controllers to it.

 - `middlewares` --> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

 - `controllers` --> they are king of the last middlewares as post them you call your business layer to execute the business lonpm  gic. In controllers we just recieve the incoming requests in data and then pass it to business layer and once business layers reutrns an output we structure the API response in controllers and send the output.

  - `repositories` --> this folder contains all the logic using which we interact with the DB by writing the queries, all the raw queries or the ORM queries will go there

 - `services` --> contains the business logic and interacts with repositories for data from the database

 - `utils` --> contains helper methods, error classes etc.
 - Inside the `src/config` folder create a file named as `config.json` and write the following code:
 ```
 {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

 ```
 - If you are setting up your development environment, then write the username of your db, password of your db and then in dialect mention whatever you are using. Example : mysql, mariadb, etc.
 - If you are setting up text or production environment, make sure you also replace the host with the hosted db url.