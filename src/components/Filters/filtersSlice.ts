import { Status } from "../../types";

// const initState: Filters = {
//   search: "",
//   status: Status.All,
//   priority: [],
// };

// const filtersSlice = (state: Filters = initState, action: ReduxAction) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filter/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filter/priorityFilterChange":
//       return {
//         ...state,
//         priority: action.payload,
//       };

//     default:
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: Status.All,
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export default filtersSlice;
