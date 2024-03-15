import { Priority, ReduxAction, TodoItem } from "../../types";

const initState: TodoItem[] = [
  { id: 1, name: "Go to gym", completed: false, priority: Priority.Medium },
  {
    id: 2,
    name: "Learn Javascript",
    completed: true,
    priority: Priority.High,
  },
  {
    id: 3,
    name: "Learn ReactJS",
    completed: false,
    priority: Priority.Low,
  },
];

const todoSlice = (state: TodoItem[] = initState, action: ReduxAction) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo: TodoItem) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default todoSlice;
