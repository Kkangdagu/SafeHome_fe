'use server';

import axios from 'axios';
import { useRouter } from 'next/navigation';

export function sendEditMember(body: object) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/member/modify`, body)
    .then((res) => {
      router.push('/myPage');
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function sendDelteMember(email: string) {
  const router = useRouter();
  axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/member/delete`, {
      params: { email },
    })
    .then((res) => {
      if (res.status === 200) {
        router.push('/');
      }
    })
    .catch((err) => {
      return err;
    });
}
