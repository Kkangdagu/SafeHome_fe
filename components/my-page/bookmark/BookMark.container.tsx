'use client';

import { useEffect, useState } from 'react';

import { getPolicyLetterUser } from '@/utils/home';

import BookmarkPresenter from './Bookmark.presenter';
import { IPolicyLetter } from './Bookmark.types';

export default function BookmarkContainer() {
  const [bookmarkList, setBookmarkList] = useState<IPolicyLetter>({
    body: [],
  });

  useEffect(() => {
    const email = localStorage.getItem('userId');
    const fetchData = async () => {
      const res = await getPolicyLetterUser(email!);
      setBookmarkList(res.body.list);
    };
    fetchData();
  }, []);
  return <BookmarkPresenter bookmarkList={bookmarkList} />;
}
