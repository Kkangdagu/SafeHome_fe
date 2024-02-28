import { createSlice } from '@reduxjs/toolkit';

interface IModalState {
  isOpen: boolean;
}

const initialState: IModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      return { ...state, isOpen: true };
    },
    close: (state) => {
      return { ...state, isOpen: false };
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;

// const MODAL_OPEN = 'modal/OPEN';
// const MODAL_CLOSE = 'modal/CLOSE';

// interface IModalOpen {
//   type: typeof MODAL_OPEN;
// }

// interface IModalClose {
//   type: typeof MODAL_CLOSE;
// }

// type ModalAction = IModalOpen | IModalClose;

// export const open = (): IModalOpen => ({ type: MODAL_OPEN });
// export const close = (): IModalClose => ({ type: MODAL_CLOSE });

// const initialState = {
//   isOpen: false,
// };

// function modalReducer(action: ModalAction, state = initialState) {
//   switch (action.type) {
//     case MODAL_OPEN:
//       return { ...state, isOpen: true };
//     case MODAL_CLOSE:
//       return { ...state, isOpen: false };
//     default:
//       return state;
//   }
// }

// export default modalReducer;
