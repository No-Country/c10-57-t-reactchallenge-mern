import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
   name: 'users',
   initialState: {
    users:[],
    bookins:[]
   },
   reducers: {
    setlistUser: (state,action) => {
        state.users = action.payload.users;
    },
    setListBookinId:(state,action) => {
        state.bookins = action.payload.bookins;
    },
   }
});


// Action creators are generated for each case reducer function
export const { setlistUser,setListBookinId } = usersSlice.actions;