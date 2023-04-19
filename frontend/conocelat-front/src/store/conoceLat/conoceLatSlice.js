import { createSlice } from '@reduxjs/toolkit';

export const conoceLatSlice = createSlice({
   name: 'conoceLat',
   initialState: {
     isSaving:false,
     counter: 10,
     
   },
   reducers: {
       increment: (state, /* action */ ) => {
           state.counter += 1;
       },
   }
});


// Action creators are generated for each case reducer function
export const { increment } = conoceLatSlice.actions;