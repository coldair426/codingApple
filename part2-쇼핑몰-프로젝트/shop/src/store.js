import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import user from './store/userSlice.js';

let stock = createSlice({
  name: 'stock',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    setStock(state, fid) {
      state.find((v) => v.id === fid.payload).count += 1;
    },
  },
});

export let { setStock } = stock.actions;

export default configureStore({
  reducer: { stock: stock.reducer, user: user.reducer },
});
