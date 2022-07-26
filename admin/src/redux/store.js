import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userRedux";

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     user: userReducer,
//   },
// });

// ######### redux persist use #########

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// const rootReducer = combineReducers({ user: userReducer });

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// exports
export let persistor = persistStore(store);
