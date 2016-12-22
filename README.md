# Express CRUD with File Storage -- Books API

Write an Express app, that uses a file for persistent storage.

## Expectations

* Use ES6 wherever possible (e.g. `let`, `const`, destructuring and fat arrow functions)
* Make regular commits
  * Make a commit every time you complete a feature
  * Give each commit a meaningful commit message
  * Don't expect the directions in this README to tell you went to commit
* All file operations must be asynchronous
* Your code must be perfectly indented.  If we can't read it, we aren't going to grade it.
* Work in your project directory at all times
* All access to the data (both in the file and in memory) can only be done through your data_store module

## Part 1: Set up your npm/Express project

1. Fork and clone this repo
1. `touch app.js`
1. `npm init -y`
1. `npm install --save express`
1. `echo node_modules > .gitignore`
1. `git add .`
1. `git commit -m "Initial project setup"`

## Part : Set up nodemon and your npm scripts

1. `npm install --save-dev nodemon`
1. Open `package.json`
1. Inside `scripts`
  * add `"watch": "\`npm bin\`/nodemon"`
  * make sure that you have the trailing commas in the right places!
1. `npm run watch`

## Part : Create an Express server

1. Open `app.js`
1. Require Express
1. Initialize an `app`
1. Determine the port to use
  * The port to use could be passed in as the second command line argument
  * If not provided, default to 8000
1. Use `app.listen` to bind and listen for connections on the above port
1. Check that this works by running `nodemon app.js` in your directory
1. Git add, commit, push

## Part : Set up your database file

1. `mkdir db`
  * `db` is short for "database"
1. `cd db`
1. `touch seed.json`
  * this is where our initial data (i.e. "seed data") is stored
  * this file will be used to reset our database file whenever we want to start over
1. open `seed.json` and paste the following inside

    ```js
    [
      {
        "id": 1,
        "author": "Marijn Haverbeke",
        "title": "Eloquent JavaScript"
      },
      {
        "id": 2,
        "author": "Nick Morgan",
        "title": "JavaScript for Kids"
      },
      {
        "id": 3,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS",
      }
    ]
    ```

1. Go back to your project directory
1. Open `package.json`
1. Inside `scripts`
  * add `"reset": "cp seed.json data.json"`
  * make sure that you have the trailing commas in the right places!
1. `npm run reset`
1. `ls`
  * notice that there is now a `data.json` in the `db` directory
  * `db/data.json` is the file that we are going to modify
1. `echo db/data.json >> .gitignore`
  * database files are typically not checked into source control, because they
    can get large, have nothing to do with development, and might hold sensitive
    data

## Part : Create a module called data_store

1. Create a new file called `data_store.js`
1. Open `data_store.js`
1. Create an empty module in here.  We will fill it in the following steps.
1. Open `app.js`
1. Require your data_store module

## Part : Implement a function that reads the contents of the file into memory

1. Open `data_store.js`
1. Write a function called `load_from_file` that reads all the contents of the `db/data.json` file into memory
  * *TIP:* "into memory" means save it in a variable (use a global variable)
  * File read/write is slow.  So we will work from memory as much as
    possible and only update the file when we have to.
1. Export this function.
1. Open `app.js`
1. Call `load_from_file` before you call `app.listen`

## Part : Implement a function that returns all the books

1. Open `data_store.js`
1. Write a function called `get_all_books` that returns an array of all the books that are in memory
1. Export this function.

## Part : Implement GET /api/books

1. Define a GET route at /api/books
1. The route should send a json response with an array of all the books
  * use your data store's `get_all_books` function to achieve this

## Part : Implement finding a book by its ID

1. Open `data_store.js`
1. Write a function called `get_book_by_id(id)`
  * returns the book with that ID
  * if no book is found, return `undefined`
1. Export this function.

## Part : Implement GET /api/books/:id

1. Define a GET route at /api/books/:id
1. The route should send a json response with the book that has the given ID
  * use your data store's `get_book_by_id(id)` function to achieve this
1. If there is no book with the given ID, respond with 404 Not Found
