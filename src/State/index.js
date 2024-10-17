
import { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } from '../State/action-creater/TodoAction';
import { fetchTodos as fetchTodosApi } from '../services/api';

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest());
  try {
    const todos = await fetchTodosApi();
    dispatch(fetchTodosSuccess(todos));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};