import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== action.payload),
      };
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, changeFilter } =
  contactsSlice.actions;
