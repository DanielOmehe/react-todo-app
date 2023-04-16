import React, { useState } from 'react';
import './App.css';
import TodoWrapper from './components/todoWrapper';
import { createContext } from 'react';

export const TodoContext = createContext();

function App() {
  const [todos, newTodos] = useState([])
  return (
    <TodoContext.Provider value={{ todos, newTodos }}>
      <div className="App">
        <TodoWrapper />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
