import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/action/Todo";
import { VISIBILITY_FILTER } from "../redux/filter";

function TodoFilter() {
  const activeFilter = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  return (
    <div className="todo-filter">
      <ul>
        {Object.keys(VISIBILITY_FILTER).map((item) => {
          const currentFilter = VISIBILITY_FILTER[item];
          return (
            <li
              className={currentFilter === activeFilter ? "active" : "filter"}
              key={`currentFilter ${currentFilter}`}
              onClick={() => dispatch(setFilter(currentFilter))}
            >
              {currentFilter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoFilter;
