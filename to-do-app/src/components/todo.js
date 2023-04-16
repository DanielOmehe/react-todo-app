import React, { useContext } from 'react';
import { TodoContext } from '../App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from './button';
import '../stylesheets/todo.css';
import EditTodoForm from './edittodoform';

const Todo = ({task, toggleComplete, deleteTodo}) => {
  const { todos, newTodos } = useContext(TodoContext);

  const edit =(id)=>{
    newTodos(todos.map(todo => todo.id === id ? { ...todo, isEditting: !todo.isEditting } : todo))
  }

  const editTask =(task, id)=>{
    if(task === '') return null
    newTodos(todos.map(todo => todo.id === id ? { ...todo, name: task, isEditting: false } : todo))
  }
  return (
    <>
      {
        task.isEditting ? <EditTodoForm editTask={editTask} id={task.id}/> : 
          <div className='todo'>
            <h1 onClick={()=> toggleComplete(task.id)} className={task.completed ? 'completed' :'task-name'}>{task.name}</h1>
            <div className='buttons'>
              <Button onclick={() => edit(task.id)}>
                <FontAwesomeIcon icon={faPenToSquare} fontSize={30} />
              </Button>
              <Button onclick={()=> deleteTodo(task.id)}>
                <FontAwesomeIcon icon={faTrash} fontSize={30} />
              </Button>
            </div>
          </div>
      }
    </>
  )
}

export default Todo
