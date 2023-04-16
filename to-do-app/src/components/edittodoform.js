import React, { useState } from 'react'
import '../stylesheets/todoForm.css'
import '../stylesheets/editTodoForm.css'

const EditTodoForm = ({editTask, id}) => {
  const [value, setValue] = useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    editTask(value, id);
    setValue('');
  }
  
  return (
    <form className='edit-todo-form' onSubmit={handleSubmit}>
      <input type='text' onChange={(e)=>setValue(e.target.value)} className='todo-input' placeholder='Update Task' value={value} />
      <button type='submit' className='todo-button'>Update task</button>
    </form>
  )
}

export default EditTodoForm
