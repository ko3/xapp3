

export const ADD_TODO = 'ADD_TODO';
export const addTodo = text =>({
  type: ADD_TODO,
  id: 4,
  text
});

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const VisibilityFilters = {
  SHOW_ALL: SHOW_ALL,
  SHOW_COMPLETED: SHOW_COMPLETED,
  SHOW_ACTIVE: SHOW_ACTIVE
}
