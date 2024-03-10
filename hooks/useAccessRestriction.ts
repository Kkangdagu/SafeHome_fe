'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const useAccessRestriction = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access-token');

      if (!token) {
        Swal.fire({
          icon: 'warning',
          title: '로그인 후 이용 가능합니다.',
          text: '로그인 하시겠습니까?',
          showCancelButton: true,
          confirmButtonText: '확인',
          confirmButtonColor: '#429f50',
          cancelButtonColor: 'red',
          cancelButtonText: '취소',
        }).then((res) => {
          if (res.isConfirmed) {
            router.push('/login');
          } else if (res.isDismissed) {
            router.push('/');
          }
        });
      }
    }
  }, []);
};

export default useAccessRestriction;
