import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { bookType, statusType } from "../../types";
import axios from "axios";
import { BASE_URL } from "../../api/apiUrl";
interface IBookState {
  books: bookType[];
  status: statusType;
  error: any;
}
const initialState: IBookState = {
  books: [],
  status: "IDLE",
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (err) {
    return err;
  }
});
export const addNewBook = createAsyncThunk(
  "books/addNewBook",
  async (newBook:bookType) => {
    try {
      const response = await axios.post(`${BASE_URL}/books`, newBook);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
export const borrowBook = createAsyncThunk(
  "books/borrowBook",
  async (bookId) => {
    try {
      const response = await axios.post(`${BASE_URL}/books/${bookId}`);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = "LOADING";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "SUCCEEDED";
        state.books = action.payload;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.error = "something went wrong";
        state.status = "FAILED";
      })
      .addCase(addNewBook.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
        state.error = null;
        state.status = "SUCCEEDED";
      })
      .addCase(addNewBook.rejected, (state) => {
        state.error = "Book upload failed";
        state.status = "SUCCEEDED";
      }).addCase(borrowBook.rejected, (state) => {
        state.error = "Book upload failed";
        state.status = "SUCCEEDED";
      });
  },
});

export default booksSlice.reducer;
