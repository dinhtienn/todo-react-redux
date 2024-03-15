import { Status, ReduxAction, Filters } from "../../types";

const initState: Filters = {
  search: "",
  status: Status.All,
  priority: [],
};

const filtersSlice = (state: Filters = initState, action: ReduxAction) => {
  switch (action.type) {
    case "filter/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filter/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    case "filter/priorityFilterChange":
      return {
        ...state,
        priority: action.payload,
      };

    default:
      return state;
  }
};

export default filtersSlice;
