const { log } = require("console");
const express = require("express");
const fs = require("fs");

const app = express();
const port = 3001;

app.use(express.json());

function findIndex(todos, id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(todos, index) {
  let arr = [];
  for (let i = 0; i < todos.length; i++) {
    if (i !== index) arr.push(todos[i]);
  }
  return arr;
}

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    res.json(todos);
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      res.json(todos[todoIndex]);
    }
  });
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

app.put("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todos[todoIndex].title = req.body.title;
      todos[todoIndex].description = req.body.description;
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json(todos[todoIndex]);
      });
    }
  });
});

app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    const index = findIndex(todos, parseInt(req.params.id));
    if(index === -1) {
        res.status(404).send();
    } else {
        todos = removeAtIndex(todos, index);
        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
          if (err) throw err;
          res.status(200).send();
        });
    }
  });
});

app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(port, () => {
  log(`Server is live on port ${port}`);
});

module.exports = app;