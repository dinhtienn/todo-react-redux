export enum Priority {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export enum Status {
  All = "All",
  Completed = "Completed",
  Todo = "Todo",
}

export enum Color {
  Red = "red",
  Blue = "blue",
  Gray = "gray",
}

export interface PriorityColorMapping {
  High: string;
  Medium: string;
  Low: string;
}

export interface Filters {
  search: string;
  status: Status;
  priority: Priority[];
}

export interface TodoItem {
  id: string | number;
  name: string;
  completed: boolean;
  priority: Priority;
}

export interface GlobalState {
  filters: Filters;
  todoList: TodoItem[];
}

export interface ReduxAction {
  type: string;
  payload: never;
}
