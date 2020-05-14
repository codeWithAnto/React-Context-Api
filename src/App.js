import React, { useState, useContext } from 'react';
import Date from './components/Date';
import { TodoContext } from './context/todoContext'
import { Inputfield } from './components/Inputfield'
import { AddButton } from './components/AddButton'
import { TodoList } from './components/TodoList'
import './App.css'

const App = props => {
  // Wrap the screen that need value from context  
  const { dispatch } = useContext(TodoContext)
  const [todo, setTodo] = useState('');

  const onBlurHandler = todo => setTodo(todo);
  const onClickHandler = () => {
    dispatch({type: 'ADD_TODO', payload: todo})
    setTodo('');
  }
  
  return (
    <div className="container">
      <Date />
      <Inputfield type="text" placeholder="Enter things todo" onBlurHandler={onBlurHandler} value={todo}/>
      <AddButton text="Add Todo +" onClickHandler={onClickHandler}/>
      <TodoList />
    </div>
  )
}

export default App;