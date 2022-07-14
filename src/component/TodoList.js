import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/action/Todo";
import { VISIBILITY_FILTER } from "../redux/filter";

function TodoList({ todoList }) {
  const visibilityFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const todos =
    visibilityFilter === VISIBILITY_FILTER.ALL
      ? todoList
      : visibilityFilter === VISIBILITY_FILTER.COMPLETE
      ? todoList.filter((filter) => {
          return filter.complete;
        })
      : todoList.filter((filter) => {
          return !filter.complete;
        });

  return (
    <div className="list-todo">
      <div>
        {todos.length ? (
          todos.map((todo) => {
            return (
              <div className="content-list-todo" key={todo.id + todo.content}>
                <div
                  className="work-todo"
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.complete ? "👌" : " 👋"} &nbsp;
                  <span className={todo.complete ? "strike" : ""}>
                    {todo.content}
                  </span>
                </div>
                <i
                  className="fa-solid fa-trash-can"
                  id={todo.id}
                  onClick={() => dispatch(deleteTodo(todo.id))}
                ></i>
              </div>
            );
          })
        ) : (
          <p
            style={{
              textAlign: "center",
              paddingTop: "15px",
              paddingBottom: "15px",
            }}
          >
            Không có việc gì làm hết, yeah!!!
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
