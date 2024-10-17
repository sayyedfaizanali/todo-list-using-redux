
import React from 'react'
import { useState } from 'react';
import { addTodo } from '../State/action-creater/TodoAction';
import { useDispatch } from "react-redux";
const TodoForm = () => {
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const dispatch = useDispatch();
    const handleAddTodo = () => {
        if (newTodoTitle.trim() !== '') {
          const id = Math.floor(Math.random() * 1000);
          dispatch(addTodo(newTodoTitle, id));
          setNewTodoTitle('');
    
        } else{
          alert('Please enter a todo title.');
          return;
        }
      };
  return (
  <>
    <input type="text" value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} />
    <button type='submit' onClick={handleAddTodo}>Add Todo</button>
  </>
  )
}

export default TodoForm;