'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { next, prev } from '@/store/modules/paginationSlice';

import { getLatestPolicy } from './LatestPolicy.api';
import LatestPolicyUI from './LatestPolicy.presenter';

export default function LatestPolicyContainer() {
  const [policy, setPolicy] = useState(null);
  // const [totalPage, setTotalPage]

  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.pagination.page);

  const prevBtn = () => {
    dispatch(prev());
  };

  const nextBtn = () => {
    dispatch(next());
  };

  useEffect(() => {
    getLatestPolicy(page)
      .then((res) => {
        setPolicy(res);
      })
      .catch((err) => {
        return err;
      });
  }, [page]);

  return (
    <LatestPolicyUI
      policy={policy}
      page={page}
      prevBtn={prevBtn}
      nextBtn={nextBtn}
    />
  );
}
