'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { onGetLatestPolicy } from '@/service/home/useHomeService';
import { RootState } from '@/store';

import LatestPolicyPresenter from './Latest.presenter';
import { ILatestPolicy } from './Latest.types';

export default function LatestPolicyContainer() {
  const [resultData, setResultData] = useState<ILatestPolicy>({
    body: { list: [] },
  });
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(0);

  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage,
  );
  const { data } = onGetLatestPolicy(currentPage);
  console.log('흠', data);
  return <LatestPolicyPresenter />;
}
