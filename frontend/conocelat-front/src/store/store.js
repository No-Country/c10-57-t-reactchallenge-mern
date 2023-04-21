import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { conoceLatSlice } from "./conoceLat/conoceLatSlice";
import { usersSlice } from "./conoceLat/Users/usersSlice";

export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      users: usersSlice.reducer,
      conoceLat: conoceLatSlice.reducer,
    },
  });
  