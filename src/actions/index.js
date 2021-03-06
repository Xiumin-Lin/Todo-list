let nextTodoId = 0;

export const addTodo = (text, date) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
  date,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const clearTodos = () => ({
  type: "CLEAR_TODOS",
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
