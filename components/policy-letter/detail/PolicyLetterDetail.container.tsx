'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  getPolicyLetterDetailNone,
  getPolicyLetterDetailUser,
} from '@/utils/home';
import { isLogin } from '@/utils/isLogin';

import PolicyLetterDetailPresenter from './PolicyLetterDetail.presenter';
import { IPolicyLetterItem } from './PolicyLetterDetail.types';

export default function PolicyLetterDetailContainer() {
  const [letterDetail, setLetterDetail] = useState<IPolicyLetterItem>();
  const id = useParams();
  const num = Number(id.slug);
  useEffect(() => {
    const fetchDataUser = async () => {
      const letterData = await getPolicyLetterDetailUser(
        num,
        localStorage.getItem('userId'),
      );
      setLetterDetail(letterData.body);
    };
    const fetchDataNone = async () => {
      const letterData = await getPolicyLetterDetailNone(num);
      setLetterDetail(letterData.body);
    };
    if (isLogin()) {
      fetchDataUser();
    } else {
      fetchDataNone();
    }
  }, []);

  return <PolicyLetterDetailPresenter letterDetail={letterDetail} />;
}
