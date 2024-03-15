import { GlobalState, Status, TodoItem } from "../types";
import { createSelector } from "reselect";

// export const todoListSelector = (state: GlobalState) =>
//   state.todoList.filter((item: TodoItem) =>
//     item.name.toLowerCase().includes(state.filters.search.toLowerCase())
//   );

export const todoListSelector = (state: GlobalState) => state.todoList;
export const searchTextSelector = (state: GlobalState) => state.filters.search;
export const statusSelector = (state: GlobalState) => state.filters.status;
export const prioritySelector = (state: GlobalState) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  prioritySelector,
  (todoList, searchText, status, priority) =>
    todoList.filter(
      (item: TodoItem) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === Status.All ||
          (status === Status.Completed && item.completed) ||
          (status === Status.Todo && !item.completed)) &&
        (!priority.length || priority.includes(item.priority))
    )
);
