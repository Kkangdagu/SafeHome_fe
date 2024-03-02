import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: { name: '', age: 0, email: '', password: '' } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});
