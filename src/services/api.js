
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchTodos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
