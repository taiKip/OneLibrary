import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


export interface IAuthentication {
  user: string | null;
  token: string | null;
}
const initialState: IAuthentication = {user:null,token:null};
export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
      setCredentials: (state,action) => {
          const { user, accessToken } = action.payload; 
      state.user = user;
      state.token = accessToken;
      
    },
      logOut: (state, action) => {
        state.user = null;
        state.token = null
    }
  },
});

export const { setCredentials,logOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;

export const currentUser = (state:RootState) => state.auth.user;
export const currentUserToken = (state:RootState) => state.auth.token;
