/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IPageNumber {
  page: number;
}

const initialState: IPageNumber = {
  page: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    prev: (state) => {
      state.page = Math.max(state.page - 1, 0);
    },
    next: (state) => {
      state.page += 1;
    },
  },
});

export const { prev, next } = paginationSlice.actions;
export default paginationSlice.reducer;
