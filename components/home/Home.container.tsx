'use client';

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useClickAway from '@/hooks/useClickAway';
import { RootState } from '@/store';
import { close, open } from '@/store/modules/modalSlice';

import HomeUI from './Home.presenter';
import { IHomeContainerProps } from './Home.types';

export default function HomeContainer({
  onBoarding,
  onLatestPolicy,
}: IHomeContainerProps) {
  const dispatch = useDispatch();
  const isModal = useSelector((state: RootState) => state.modal.isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    dispatch(open());
  };

  const closeModal = () => {
    dispatch(close());
  };

  useClickAway(modalRef, closeModal);

  return (
    <HomeUI
      onBoarding={onBoarding}
      onLatestPolicy={onLatestPolicy}
      isModal={isModal}
      openModal={openModal}
      closeModal={closeModal}
      modalRef={modalRef}
    />
  );
}
