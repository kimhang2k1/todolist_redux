import { useSelector } from "react-redux";
import TodoFilter from "../component/TodoFilter";
import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";

function Home() {
  const todoList = useSelector((state) => state.todo.listTodo);
  return (
    <div className="todo-app">
      <div className="nav-todo-app">
        <div className="tittle-todo-app">
          <h2>TODO APP </h2>
        </div>
        <TodoForm />
        <TodoList todoList={todoList} />
        <TodoFilter todoList={todoList} />
      </div>
    </div>
  );
}

export default Home;
