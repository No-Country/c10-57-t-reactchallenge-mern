import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { conoceLatSlice } from "./conoceLat/conoceLatSlice";

export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      conoceLat: conoceLatSlice.reducer,
    },
  });
  