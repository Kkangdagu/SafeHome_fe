/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';

import { getPolicyLetterUser } from '@/utils/home';

import PolicyLetterListUI from './PolicyLetter.presenter';
import { IPolicyLetter } from './PolicyLetter.types';

export default function PolicyLetterListContainer() {
  const [letterList, setLetterList] = useState<IPolicyLetter>({
    body: [],
  });

  useEffect(() => {
    const email = localStorage.getItem('userId');
    const fetchData = async () => {
      const res = await getPolicyLetterUser(email!);
      setLetterList(res.body.list);
    };
    fetchData();
  }, []);

  return <PolicyLetterListUI letterList={letterList} />;
}
