import { VISIBILITY_FILTER } from "../filter";

const filterDefault = VISIBILITY_FILTER.ALL;
const visibilityFilter = (state = filterDefault, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload.filter;
    default:
      return state;
  }
};
export default visibilityFilter;
