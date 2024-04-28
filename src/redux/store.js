import { contactsReduser } from "./contactsSlice";
import { filtersReducer } from "./filtesSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReducer,
  },
});
