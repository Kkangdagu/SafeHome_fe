/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPageNumber {
  currentPage: number;
}

const initialState: IPageNumber = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    prev: (state) => {
      state.currentPage = Math.max(state.currentPage - 1, 1);
    },
    next: (state) => {
      state.currentPage += 1;
    },
  },
});

export const { setCurrentPage, prev, next } = paginationSlice.actions;
export default paginationSlice.reducer;
