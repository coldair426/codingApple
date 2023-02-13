import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    setUser(state) {
      state.name = 'park';
    },
    addAge(state, a) {
      state.age += a.payload;
    },
  },
});

export let { setUser, addAge } = user.actions;

export default user;
