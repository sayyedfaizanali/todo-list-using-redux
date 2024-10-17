import {
  ADD_CHECKBOX,
  ADD_FILTER,
  ADD_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "../action-creater/TodoAction";

const initialState = {
  todos: [],
  loading: false,
  error: null,
  filterTodoList: []
};
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case ADD_CHECKBOX:
      return {...state, todos: action.payload };
    case ADD_FILTER:
      return {
        ...state,
        filterTodoList: action.payload,
      };
    default:
      return state;
  }
};
