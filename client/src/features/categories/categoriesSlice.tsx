import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { categoryType, statusType } from "../../types";
import axios from "axios";
import { BASE_URL } from "../../api/apiUrl";
interface Icategoriestate {
  categories: categoryType[];
  status: statusType;
  error: any;
}
const initialState: Icategoriestate = {
  categories: [],
  status: "IDLE",
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories`);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = "LOADING";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "SUCCEEDED";
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "FAILED";
      });
  },
});


export default categoriesSlice.reducer;
