import { serverSlice } from "./serverSlice"
import { mainCoinsSlice } from "./mainCoinsSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    [serverSlice.reducerPath]: serverSlice.reducer,
    [mainCoinsSlice.reducerPath]: mainCoinsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverSlice.middleware, mainCoinsSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch
