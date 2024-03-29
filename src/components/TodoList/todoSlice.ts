import { Priority, TodoItem } from "../../types";

// const initState: TodoItem[] = [
//   { id: 1, name: "Go to gym", completed: false, priority: Priority.Medium },
//   {
//     id: 2,
//     name: "Learn Javascript",
//     completed: true,
//     priority: Priority.High,
//   },
//   {
//     id: 3,
//     name: "Learn ReactJS",
//     completed: false,
//     priority: Priority.Low,
//   },
// ];

// const todoSlice = (state: TodoItem[] = initState, action: ReduxAction) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo: TodoItem) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [
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
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(
        (todo: TodoItem) => todo.id === action.payload
      );
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});

export default todoSlice;
