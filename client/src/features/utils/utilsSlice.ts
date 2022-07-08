import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface utilState {
  page: number;
  category: string;
  title: string;
  sort: string;
}
const initialState: utilState = {
  page: 1,
  category: "",
  title: "",
  sort: "asc",
};

export const utilSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1;
      console.log("IN add  page");
    },
    decrement: (state) => {
      state.page -= 1;
    },
  },
});

export const { increment, decrement } = utilSlice.actions;

export default utilSlice.reducer;
