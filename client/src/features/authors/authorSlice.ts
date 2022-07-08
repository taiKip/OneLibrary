import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { authorType, statusType } from "../../types";
import axios from "axios";
import { BASE_URL } from "../../api/apiUrl";
interface IauthorState {
  authors: authorType[];
  status: statusType;
  error: any;
}
const initialState: IauthorState = {
  authors: [],
  status: "IDLE",
  error: null,
};

export const fetchAuthors = createAsyncThunk("authors/fetchAuthors", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/authors`);
  console.log(response.data)
    return response.data;
  } catch (err) {
    return err;
  }
});
export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    addAuthor: (state, action: PayloadAction<authorType>) => {
      state.authors.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state, action) => {
        state.status = "LOADING";
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = "SUCCEEDED";
        state.authors = action.payload;
        state.error = null;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "FAILED";
      });
  },
});

export const { addAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
