import { configureStore } from '@reduxjs/toolkit';

import modalReducer from '@/store/modules/modalSlice';
import paginationReducer from '@/store/modules/paginationSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
