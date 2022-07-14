const initialState = {
  listTodo: [],
};
const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newListTodo = [...state.listTodo];
      newListTodo.push(action.payload);
      return {
        ...state,
        listTodo: newListTodo,
      };
    case "TOGGLE_TODO":
      const cloneTodo = [...state.listTodo];
      const id = action.payload.id;

      const mapped = cloneTodo.map((todo) => {
        return todo.id === id
          ? { ...todo, complete: !todo.complete }
          : { ...todo };
      });
      return {
        ...state,
        listTodo: mapped,
      };
    case "DELETE_TODO":
      const cloneTodoList = [...state.listTodo];
      const currentID = action.payload;
      const deleteList = cloneTodoList.filter((todo) => {
        return todo.id !== currentID;
      });
      return {
        ...state,
        listTodo: deleteList,
      };
    default:
      return state;
  }
};
export default TodoReducers;
