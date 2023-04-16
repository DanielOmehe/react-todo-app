import React, { useState } from 'react'
import '../stylesheets/todoForm.css'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    addTodo(value);
    setValue('');
  }
  
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' onChange={(e)=>setValue(e.target.value)} className='todo-input' placeholder='what you doing today?' value={value} />
      <button type='submit' className='todo-button'>Add task</button>
    </form>
  )
}

export default TodoForm
