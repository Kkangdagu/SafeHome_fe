'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useClickAway from '@/hooks/useClickAway';
import { RootState } from '@/store';
import { close, open } from '@/store/modules/modalSlice';
import { next, prev, setCurrentPage } from '@/store/modules/paginationSlice';
import { getLatestPolicy, getPolicyLetter } from '@/utils/home';

import HomeUI from './Home.presenter';
import { ILatestPolicy, IPolicyLetter } from './Home.types';

export default function HomeContainer() {
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(0);
  const [latestPolicy, setLatestPolicy] = useState<ILatestPolicy>({
    body: { list: [] },
  });
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

  const onLatestPolicy = useCallback(async () => {
    const res = await getLatestPolicy(currentPage);
    const start = parseInt(res.body.startPage, 10);
    const end = parseInt(res.body.endPage, 10);
    setLatestPolicy(res);
    setStartPage(start);
    setEndPage(end);
  }, [currentPage]);

  const onPageClick = (pageNunber: number) => {
    dispatch(setCurrentPage(pageNunber));
    onLatestPolicy();
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
    onLatestPolicy();
  }, [onLatestPolicy]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPolicyLetter();
      setPolicyLetter(res);
    };
    fetchData();
  }, []);

  return (
    <HomeUI
      latestPolicy={latestPolicy}
      policyLetter={policyLetter}
      currentPage={currentPage}
      startPage={startPage}
      endPage={endPage}
      prevBtn={prevBtn}
      nextBtn={nextBtn}
      isModal={isModal}
      openModal={openModal}
      closeModal={closeModal}
      modalRef={modalRef}
      date={date}
      onPageClick={onPageClick}
    />
  );
}
