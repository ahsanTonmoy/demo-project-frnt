// import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

// Define the initial state using that type
const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
