import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoContextProvider from './context/todoProvider'

ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  document.getElementById('root')
);
