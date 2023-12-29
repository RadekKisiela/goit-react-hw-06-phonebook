import { createReducer } from '@reduxjs/toolkit';
import { setContacts, addContact, deleteContact } from './actions';

const initialState = '';

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(setContacts, (state, action) => {
      state = action.payload;
    })
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state = state(contact => contact.id !== action.payload);
    });
});

export default contactsReducer;
