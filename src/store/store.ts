import {  accountsSlice } from "./AccountsSlice";
import { profilesSlice } from "./ProfilesSlice";
import { compaignsSlice } from "./CompaignsSlice";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineSlices(accountsSlice, profilesSlice, compaignsSlice)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  })
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export type AppDispatch = typeof store.dispatch