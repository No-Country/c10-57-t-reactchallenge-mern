import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
   name: 'users',
   initialState: {
    users:[],
   },
   reducers: {
    setlistUser: (state,action) => {
        state.users = action.payload.users;
    },
   }
});


// Action creators are generated for each case reducer function
export const { setlistUser } = usersSlice.actions;