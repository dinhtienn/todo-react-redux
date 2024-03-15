import { Priority, TodoItem } from "../types";

export const addTodoAction = (data: TodoItem) => ({
  type: "todoList/addTodo",
  payload: data,
});

export const toggleTodoStatus = (id: string | number) => ({
  type: "todoList/toggleTodoStatus",
  payload: id,
});

export const searchFilterChange = (text: string) => ({
  type: "filter/searchFilterChange",
  payload: text,
});

export const statusFilterChange = (completed: boolean) => ({
  type: "filter/statusFilterChange",
  payload: completed,
});

export const priorityFilterChange = (priority: Priority[]) => ({
  type: "filter/priorityFilterChange",
  payload: priority,
});
