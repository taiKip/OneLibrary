import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";
import { statusType } from "../../types";
import axios from "axios";
import { BASE_URL } from "../../api/apiUrl";
interface IUploadState {
  url: string;
  status: statusType;
  error: any;
}
const initialState: IUploadState = {
    url: "",
    status: "IDLE",
    error:false
};

export const fetchImageUrl = createAsyncThunk(
  "imageUrl/fetchImageUrl",
    async () => {
    try {
      const response = await axios.get(`${BASE_URL}/upload`);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
export const addNewImage = createAsyncThunk(
  "imageUrl/addNewImage",
  async ({ url, image }: { url: string, image: HTMLImageElement }) => {
    
  console.log("Url in add image :",url)
    try {
     
       const config = {
         headers: {
           "content-type": "multipart/form-data",
         },
       };
      const response = await axios.post(`${url}`,image,config);
      console.log("image succesfully uploaded")
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

export const uploadImageSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImageUrl.pending, (state, action) => {
        state.status = "LOADING";
      })
      .addCase(fetchImageUrl.fulfilled, (state, action) => {
        state.status = "SUCCEEDED";
        state.url = action.payload.url;
        state.error = null;
      })
      .addCase(fetchImageUrl.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "FAILED";
      })
      .addCase(addNewImage.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "FAILED";
    })
  },
});

export default uploadImageSlice.reducer;
