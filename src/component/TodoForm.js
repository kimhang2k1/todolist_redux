import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/action/Todo";

function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="input-todo-app">
      <input
        type="text"
        placeholder="Enter todo ...."
        onChange={changeInput}
        value={input}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoForm;
