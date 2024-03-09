'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getPolicyLetter } from '@/utils/home';

import PolicyLetterDetailPresenter from './PolicyLetterDetail.presenter';
import { IPolicyLetterItem } from './PolicyLetterDetail.types';

export default function PolicyLetterDetailContainer() {
  const [letterDetail, setLetterDetail] = useState<IPolicyLetterItem>();
  const id = useParams();
  const num = Number(id.slug) - 1;
  useEffect(() => {
    const fetchData = async () => {
      const letterData = await getPolicyLetter();
      setLetterDetail(letterData.body[num]);
    };
    fetchData();
  }, [num]);

  return <PolicyLetterDetailPresenter letterDetail={letterDetail} />;
}
