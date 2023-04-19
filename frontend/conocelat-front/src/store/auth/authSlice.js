import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
       status: "checking",
       userId:0,
       roleName:null,
       userName: null,
       userLastName: null,
       userEmail: null,
       userPassword: null
   },
   reducers: {
       login: (state, { payload } ) => {
           state.status = payload.status;
           state.userId=payload.userId;
           state.roleName=payload.roleName;
           state.userName= payload.userName;
           state.userLastName= payload.userLastName;
           state.userEmail = payload.userEmail;
       },
       logout: (state, { payload }) => {
        state.status = "not-authenticated";
        state.userId=null;
        state.roleName=null;
        state.userName= null;
        state.userLastName= null;
        state.userEmail = null;
      },
   }
});


// Action creators are generated for each case reducer function
export const { login,logout } = authSlice.actions;