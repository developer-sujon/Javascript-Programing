const { argv } = require("yargs");
const path = require("path");
const { ADD, LIST, SEARCH, FIND, DONE, NEXT, UPDATE } = require("./command");
const { saveFile, readFile } = require("./utils");
const Todo = require("./Todo");

(function init() {
  const fileLocation = "./data.json";
  const filePath = path.resolve(__dirname, fileLocation);

  const data = readFile(filePath) || [];
  const todo = new Todo(data);

  const { _: baseCommand, text, id } = argv;

  switch (baseCommand[0]) {
    case ADD:
      const newTodo = todo.addTodo(text);
      saveFile(filePath, todo.todoLists);
      console.log({
        status: true,
        message: "todo create successful",
        data: newTodo,
      });
      break;

    case LIST:
      const todos = todo.listsTodo();
      for (let i = 0; i < todos.length; i++) {
        console.log({
          status: true,
          message: null,
          data: todos,
        });
      }
      break;

    case SEARCH:
      const termsTodos = todo.searchTodo(text);
      for (let i = 0; i < termsTodos.length; i++) {
        console.log({
          status: true,
          message: null,
          data: termsTodos,
        });
      }

    case FIND:
      const findTodo = todo.findTodo(id);
      console.log({
        status: true,
        message: null,
        data: findTodo,
      });

      break;

    case NEXT:
      const findNextTodo = todo.next();
      console.log({
        status: true,
        message: null,
        data: findNextTodo,
      });

    case DONE:
      const doneTodo = todo.done(id);
      console.log({
        status: true,
        message: "todo done successful",
        data: doneTodo,
      });
      saveFile(filePath, todo.todoLists);

    case UPDATE:
      const updateTodo = todo.update(id, text);
      console.log({
        status: true,
        message: "todo update successful",
        data: updateTodo,
      });
      saveFile(filePath, todo.todoLists);

    default:
      console.log("command not fount");
      break;
  }
})();
