import React, { useEffect } from 'react';
import { fetchTodos} from '../State/index';
import { useSelector, useDispatch } from "react-redux";
import { addCheckbox } from '../State/action-creater/TodoAction';

const TodoList = () => {
  const dispatch = useDispatch();
  
  const filterTodoList = useSelector((state)=> state.filterTodoList);

  const todos = useSelector((state)=> state.todos);
  const loading = useSelector((state)=> state.loading);
  const error = useSelector((state)=> state.error);
 

   const handleCheckboxChange = (todo) => {
    dispatch(addCheckbox(todo, todos));

  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {(filterTodoList?.length > 0 ? filterTodoList : todos).map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td className='check-checkbox'><input
                type="checkbox"
                checked={todo.completed} 
                onChange={() => handleCheckboxChange(todo)}
              />
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};


export default TodoList;
