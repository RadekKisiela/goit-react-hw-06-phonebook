import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './actions';

const initialState = '';

const filterReducer = createReducer(initialState, builder => {
  builder.addCase(setFilter, (state, action) => {
    state.filter = action.payload;
  });
});

export default filterReducer;
