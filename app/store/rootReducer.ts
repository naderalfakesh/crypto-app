import { serverSlice } from "./serverSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    [serverSlice.reducerPath]: serverSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch
