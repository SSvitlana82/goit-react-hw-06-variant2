import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: { ...contact, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex((contact) => {
        return contact.id === action.payload;
      });
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const selectContacts = (state) => {
  return state.items;
};
export const contactsReduser = contactSlice.reducer;
