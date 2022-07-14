const randomID = () => {
  return 9000 + Math.trunc(Math.random() * 1000);
};
export const addTodo = (input) => {
  const todoID = randomID();
  return {
    type: "ADD_TODO",
    payload: {
      id: todoID,
      content: input,
      complete: false,
    },
  };
};
export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    payload: {
      filter,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
