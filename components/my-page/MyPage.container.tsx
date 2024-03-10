'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import instance from '@/utils/intercepter';
import { isLogin } from '@/utils/isLogin';

import MyPageUI from './MyPage.presenter';
import { IUpload } from './MyPage.types';

export default function MyPageContainer() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [uploadItem, setUploadItem] = useState<IUpload>({
    data: [],
  });

  const [visible, setVisible] = useState(true);

  // 로그인 확인

  useEffect(() => {
    if (!isLogin()) {
      redirect('/login');
    }
    setName(localStorage.getItem('name')!);
    setEmail(localStorage.getItem('userId')!);
  }, []);

  const getUpload = () => {
    const res = instance.get(`/member/contract/seleteAll`, {
      params: { email: localStorage.getItem('userId') },
    });
    return res;
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await getUpload();
      setUploadItem(res.data.body);
    };
    fetchData();
    if (uploadItem.data.length === 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);

  return (
    <MyPageUI
      email={email}
      name={name}
      visible={visible}
      uploadItem={uploadItem}
    />
  );
}
