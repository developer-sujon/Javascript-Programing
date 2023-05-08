class Todo {
  constructor(data = []) {
    this.todoLists = data;
  }

  genID(todos) {
    if (todos.length <= 0) return 1;
    return todos[todos.length - 1].id + 1;
  }

  addTodo(text) {
    const todo = {
      id: this.genID(this.todoLists),
      text,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.todoLists.push(todo);

    return todo;
  }

  listsTodo() {
    return this.todoLists;
  }

  searchTodo(term) {
    const result = [];
    const todoLists = this.todoLists;

    for (let i = 0; i < todoLists.length; i++) {
      if (
        todoLists[i].text &&
        todoLists[i].text.toLowerCase().includes(term.toLowerCase())
      ) {
        result.push(todoLists[i]);
      }
    }
    return result;
  }

  findTodo(id) {
    let todo = null;
    for (let i = 0; i < this.todoLists.length; i++) {
      if (this.todoLists[i].id === id) {
        todo = this.todoLists[i];
        break;
      }
    }
    return todo;
  }

  done(id) {
    const todoLists = this.todoLists;
    let deletedTodo = null;
    for (let i = 0; i < todoLists.length; i++) {
      if (todoLists[i].id === id) {
        deletedTodo = todoLists[i];
        todoLists.splice(i, 1);
      }
    }

    return deletedTodo;
  }

  update(id, text) {
    const todoLists = this.todoLists;
    let updatedTodo = null;
    for (let i = 0; i < todoLists.length; i++) {
      if (todoLists[i].id === id) {
        todoLists[i].text = text;
        todoLists[i].updatedAt = Date.now();
        updatedTodo = todoLists[i];
      }
    }

    return updatedTodo;
  }

  next() {
    return this.todoLists[0];
  }
}

module.exports = Todo;
