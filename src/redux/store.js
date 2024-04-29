import { contactsReduser } from "./contactsSlice";
import { filtersReducer } from "./filtesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedContactReducer = persistReducer(persistConfig, contactsReduser);
export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filtersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
