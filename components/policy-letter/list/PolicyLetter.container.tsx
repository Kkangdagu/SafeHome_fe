/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';

import { getPolicyLetterNone, getPolicyLetterUser } from '@/utils/home';
import { isLogin } from '@/utils/isLogin';

import PolicyLetterListUI from './PolicyLetter.presenter';
import { IPolicyLetter } from './PolicyLetter.types';

export default function PolicyLetterListContainer() {
  const [letterList, setLetterList] = useState<IPolicyLetter>({
    body: [],
  });

  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await getPolicyLetterUser(localStorage.getItem('userId')!);
      setLetterList(res.body.list);
    };
    const fetchDataNone = async () => {
      const res = await getPolicyLetterNone();
      setLetterList(res.body.list);
    };
    if (isLogin()) {
      fetchDataUser();
    } else {
      fetchDataNone();
    }
  }, []);

  return <PolicyLetterListUI letterList={letterList} />;
}
