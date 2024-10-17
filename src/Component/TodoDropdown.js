import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../State/action-creater/TodoAction';
const TodoDropdown = () => {
  const dispatch = useDispatch();  

  const handleFilter = (e)=>{
    const filterValue = e.target.value;
    dispatch(addFilter(filterValue));

  }
    return (
      <div>
        <label>Filter: </label>
        <select onChange={handleFilter}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      
    );
  };
  export default TodoDropdown;