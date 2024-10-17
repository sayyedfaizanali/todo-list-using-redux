import './App.css';
import './Component/TodoForm.css'
import {store} from './State/store';

import { Provider } from 'react-redux';
import TodoForm from './Component/TodoForm';
import TodoDropdown from './Component/TodoDropdown';
import TodoList from './Component/TodoList';
function App() {
  return (
  <Provider store={store}>
  <div className="app">
    <h1>Redux Table App</h1>
    <div className='top-part'>
      <div className='form'>
       <TodoForm />
      </div>
      <TodoDropdown />
    </div>
    <div className='table'>
    <TodoList />
    </div>
  </div>
</Provider>
  );
}

export default App;
