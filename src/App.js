import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import TodoStore from "./store/todoStore";
import ToDoList from './component/List';
import "./App.css";

const App = observer(() => {
  const store = useContext(TodoStore);
  const [ toggleEdit , setToggleEdit ] = useState(false);
  return (
    <div className="App">
      <h1>To do list</h1>
      <input type="text" onChange={e => store.tempTodo(e.target.value)} />
      <input
        type="submit"
        onClick={e => store.saveTodo(store.tempText)}
        disabled={toggleEdit ? "disabled" : ""}
      />
      <ToDoList todos={store.todos} delToDo={store.deleteTodo} toggleedit={toggleEdit} setedit={setToggleEdit}/>
    </div>
  );
});

export default App;
