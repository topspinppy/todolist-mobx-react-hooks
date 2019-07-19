import { observable, action, decorate } from "mobx";
import { createContext } from "react";

export class TodoStore {
  todos = [];
  tempText = "";
  idTempStatusEdit = "";
  tempTextUpdate = ""

  tempTodo(text) {
    this.tempText = text;
  }

  saveTodo(text) {
    this.todos.push(text);
  }

  deleteTodo(index) {
    this.todos.splice(index,1)
  }

  saveStatusEdit(index) {
    this.idTempStatusEdit = index;
  }

  saveTempTextUpdate(e) {
    this.tempTextUpdate = e.target.value;
  }

  updateStatusEdit(text,index) {
    this.todos[index] = text
  }
}

decorate(TodoStore, {
  todos: observable,
  tempTodo: action,
  saveTodo: action,
  deleteTodo: action
});

export default createContext(new TodoStore());
