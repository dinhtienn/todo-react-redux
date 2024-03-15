import filtersSlice from "../components/Filters/filtersSlice";
import todoSlice from "../components/TodoList/todoSlice";
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
