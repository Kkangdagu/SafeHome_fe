'use client';

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useClickAway from '@/hooks/useClickAway';
import { onGetLatestPolicy } from '@/service/home/useHomeService';
import { RootState } from '@/store';
import { close, open } from '@/store/modules/modalSlice';
import { next, prev, setCurrentPage } from '@/store/modules/paginationSlice';
import { getPolicyLetter } from '@/utils/home';

import HomeUI from './Home.presenter';
import { IPolicyLetter } from './Home.types';

export default function HomeContainer() {
  const [policyLetter, setPolicyLetter] = useState<IPolicyLetter>({
    body: [],
  });
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage,
  );
  const isModal = useSelector((state: RootState) => state.modal.isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const { data, isError } = onGetLatestPolicy(currentPage);

  const onPageClick = (pageNunber: number) => {
    dispatch(setCurrentPage(pageNunber));
  };

  const openModal = () => {
    dispatch(open());
  };

  const closeModal = () => {
    dispatch(close());
  };

  const prevBtn = () => {
    dispatch(prev());
  };

  const nextBtn = () => {
    dispatch(next());
  };

  useClickAway(modalRef, closeModal);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPolicyLetter();
      setPolicyLetter(res);
    };
    fetchData();
  }, []);

  if (isError) {
    // eslint-disable-next-line no-alert
    alert(data.head.resultMsg);
  }

  return (
    <HomeUI
      policyLetter={policyLetter}
      currentPage={currentPage}
      prevBtn={prevBtn}
      nextBtn={nextBtn}
      isModal={isModal}
      openModal={openModal}
      closeModal={closeModal}
      modalRef={modalRef}
      date={date}
      onPageClick={onPageClick}
      data={data}
    />
  );
}
