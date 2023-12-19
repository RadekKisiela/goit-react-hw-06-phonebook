import { createReducer } from '@reduxjs/toolkit';
import { setContacts, addContact, deleteContact, setFilter } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(setContacts, (state, action) => {
      state.contacts = action.payload;
    })
    .addCase(addContact, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
});

export default contactsReducer;
