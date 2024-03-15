import filtersSlice from "../components/Filters/FiltersSlice";
import todoSlice from "../components/TodoList/TodoSlice";
import { combineReducers } from "redux";

// const rootReducer = (state: GlobalState = initState, action: ReduxAction) => {
//   return {
//     filters: filtersSlice(state.filters, action),
//     todoList: todoSlice(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filtersSlice,
  todoList: todoSlice,
});

export default rootReducer;
