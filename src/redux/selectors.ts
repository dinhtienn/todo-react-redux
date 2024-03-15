import { GlobalState, Status, TodoItem } from "../types";
import { createSelector } from "@reduxjs/toolkit";

// export const todoListSelector = (state: GlobalState) =>
//   state.todoList.filter((item: TodoItem) =>
//     item.name.toLowerCase().includes(state.filters.search.toLowerCase())
//   );

export const todoListSelector = (state: GlobalState) => state.todoList;
export const searchTextSelector = (state: GlobalState) => state.filters.search;
export const statusSelector = (state: GlobalState) => state.filters.status;
export const prioritiesSelector = (state: GlobalState) =>
  state.filters.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  prioritiesSelector,
  (todoList, searchText, status, priorities) =>
    todoList.filter(
      (item: TodoItem) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === Status.All ||
          (status === Status.Completed && item.completed) ||
          (status === Status.Todo && !item.completed)) &&
        (!priorities.length || priorities.includes(item.priority))
    )
);
