import React, { Fragment, useContext } from "react";
import { observer } from "mobx-react-lite";
import TodoStore from "../store/todoStore";

const List = observer(props => {
  const store = useContext(TodoStore);
  return (
    <ul>
      {props.todos.map((item, index) => (
        <Fragment key={index}>
          {props.toggleedit && store.idTempStatusEdit === index ? (
            <div>
              <input
                type="text"
                onChange={e => store.saveTempTextUpdate(e)}
                defaultValue={store.todos[index]}
              />
              <button
                onClick={() => {
                  store.updateStatusEdit(store.tempTextUpdate, index);
                  props.setedit(false);
                }}
              >
                Edit
              </button>
              <button onClick={() => props.setedit(false)}>Cancel</button>
            </div>
          ) : (
            <li key={index}>{item}</li>
          )}
          {!props.toggleedit  ? (
            <div>
              <button onClick={() => props.delToDo(index)}>remove</button>
              <button
                onClick={() => {
                  props.setedit(true);
                  store.saveStatusEdit(index);
                }}
              >
                {" "}
                Edit
              </button>
            </div>
          ) : (
            ""
          )}
        </Fragment>
      ))}
    </ul>
  );
});

export default List;
