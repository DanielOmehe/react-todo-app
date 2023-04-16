import React, { useContext } from 'react';
import TodoForm from './todoform';
import Todo from './todo';
import { TodoContext } from '../App.js';
import '../stylesheets/todo-Wrapper.css';

const TodoWrapper = () => {
    const { todos, newTodos } = useContext(TodoContext);

    const generateId =()=>{
      const idString = '1234567890abcdef';
      let id = '';
      for(let i = 0; i < idString.length ; i++){
        id += idString[Math.floor(Math.random() * idString.length)]
      }
      return id
    }
    const addTodo =(todo)=>{
        if(todo === '') return null;
        newTodos([
          ...todos,
          { id: generateId(), name: todo, completed: false, isEditing: false }
      ])
    }

    const deleteTodo =(id)=>{
      newTodos(todos.filter(todo => todo.id !== id))
      console.log(todos)
    }

    const toggleComplete =(id)=>{
      newTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ))
    }
    
  return (
    <div className='todo-wrapper'>
      <h1>Today's Tasks</h1>
      <TodoForm addTodo={addTodo} />
      <div className='todos'>
        {
            todos.map((todo)=>{
                return <Todo key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            })
        }
      </div>
    </div>
  )
}

export default TodoWrapper