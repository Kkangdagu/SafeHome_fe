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
  const [bookmarkList, setBookmarkList] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await getPolicyLetterUser(localStorage.getItem('userId')!);
      const length = res.body.totalElements;
      const bookmarkBooleanArray = Array.from({ length }, () => false);
      setBookmarkList(bookmarkBooleanArray);
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

  return (
    <PolicyLetterListUI
      bookmarkList={bookmarkList}
      setBookmarkList={setBookmarkList}
      letterList={letterList}
    />
  );
}
