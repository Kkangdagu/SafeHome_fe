/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';

import { getPolicyLetter } from '@/utils/home';

import PolicyLetterListUI from './PolicyLetter.presenter';
import { IPolicyLetter } from './PolicyLetter.types';

export default function PolicyLetterListContainer() {
  const [letterList, setLetterList] = useState<IPolicyLetter>({
    body: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPolicyLetter();
      setLetterList(res);
    };
    fetchData();
  }, []);

  return <PolicyLetterListUI letterList={letterList} />;
}
