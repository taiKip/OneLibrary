import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../features/books/bookSlice'
import pageReducer from '../features/utils/utilsSlice'
import authorReducer from '../features/authors/authorSlice'
import categoryReducer from '../features/categories/categoriesSlice'
import imageReducer from '../features/uploadImage/uploadImage'
import authReducer from "../features/auth/authSlice";
export const store = configureStore({
  reducer: {
        books: booksReducer,
        pages: pageReducer,
    authors: authorReducer,
    categories: categoryReducer,
    imageUpload: imageReducer,
      auth:authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
