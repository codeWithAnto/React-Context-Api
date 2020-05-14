import React, { useReducer } from "react";
import { initalState } from "../store/todo";
import { todoReducer } from "../Reducer/todo";
import { TodoContext } from './todoContext'

const Todo = props => {
  const [state, dispatch] = useReducer(todoReducer, initalState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default Todo;