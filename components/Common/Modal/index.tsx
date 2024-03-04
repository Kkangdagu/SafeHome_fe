'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalType = 'menu' | 'analysis';

interface IModal extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type: ModalType;
  isOverlay?: boolean;
  onClick?: () => void;
}

const variants = {
  menu: 'w-[190px] h-[360px] p-4 flex flex-col gap-5 border absolute bg-[aliceblue]',
  analysis: '',
};

const Modal = forwardRef<HTMLDivElement, IModal>(
  (
    { children, type = 'menu', isOverlay = false, className, onClick }: IModal,
    ref,
  ) => {
    const container = document.getElementById('modal');

    if (!container) {
      return null;
    }

    return createPortal(
      <>
        {isOverlay && (
          <div className="z-[999] fixed w-[100vw] h-screen top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)]" />
        )}
        <div
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          className={`${variants[type]} ${className}`}
          onClick={onClick}
          ref={ref}>
          {children}
        </div>
      </>,
      container,
    );
  },
);
Modal.displayName = 'Modal';

export default Modal;
