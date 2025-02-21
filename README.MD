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

 ### Setup the project

 - Download this tempelate from github and open it in your favourite text editor.
 - Go inside the folder path and execute the following command:
    ```
        npm install
    ```
 - in the root directory create a new `env` file and add the following env variables 
    ``` 
        PORT = <Port number of your choice>
    ``` 
  example:
    ```
        PORT=3000
    ```
 - go inside the `src` folder and execute the following command:
    ```
         npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.
 - If you are setting up your development environment, then write the username of your db, password of your db and then in dialect mention whatever you are using. Example : mysql, mariadb, etc.
 - If you are setting up text or production environment, make sure you also replace the host with the hosted db url.
 - Migrations files are used to do version control of our database, they are simple language scripts. if you are using node.js and sequelize then they are javascripts if using rubyonrails then they are ruby files. inthese files you actually write programatically that how to maintain version of your database.
 
 - To run the server execute 
    ```
        npm run dev
    ```