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
    deleteStock(state, fid) {
      state.find((v) => v.id === fid.payload).count += 1;
    },
    setStock(state, fid) {
      state.splice(
        state.findIndex((v) => v.id === fid.payload),
        1
      );
    },
    addCart(state, a) {
      if (state.find((v) => +v.id === +a.payload.id)) {
        state.find((v) => +v.id === +a.payload.id).count += 1;
      } else state.push(a.payload);
    },
  },
});

export let { setStock, addCart } = stock.actions;

export default configureStore({
  reducer: { stock: stock.reducer, user: user.reducer },
});
