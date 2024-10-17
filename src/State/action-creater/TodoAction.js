export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const ADD_TODO = "ADD_TODO";
export const ADD_CHECKBOX = "ADD_CHECKBOX";
export const ADD_FILTER = "ADD_FILTER";

export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  payload: error,
});

export const addTodo = (title, id) => ({
  type: ADD_TODO,
  payload: { title, id },
});

export const addCheckbox = (todo) => {
  return (dispatch, getState) => {
    const todoList = getState()?.todos; 
    const index = todoList.findIndex((item) => todo.id === item.id);
    const newArray = [...todoList];
    newArray[index].completed = !newArray[index].completed;
    dispatch({type: ADD_CHECKBOX,payload:newArray});
  }
};

export const addFilter = (filter) => {
  return (dispatch, getState) => {
    const todoList = getState()?.todos; // getState() get the todos from the redux
    const newList = todoList.filter((todo) => {
      if (filter.toLowerCase() === "all") {
        return false;
      } else if (filter.toLowerCase() === "active") {
        return !todo?.completed;
      } else if (filter.toLowerCase() === "completed") {
        return todo?.completed;
      }
      return false;
    });

    dispatch({type: ADD_FILTER,payload:newList});

  };
};
