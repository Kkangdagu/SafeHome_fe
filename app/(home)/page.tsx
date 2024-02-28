'use client';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Common/Modal';
import { RootState } from '@/store';
import { close, open } from '@/store/modules/modalSlice';

export default function Home() {
  const dispatch = useDispatch();
  const isModal = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <div className="w-full flex justify-between relative">
      <Link href="/">로고위치</Link>
      <button onClick={() => dispatch(open())}>메뉴</button>
      {isModal && (
        <Modal type="menu" isOverlay>
          <button className="text-end" onClick={() => dispatch(close())}>
            ❌
          </button>
          <Link href="/login">로그인</Link>
          <Link href="/register">회원가입</Link>
          <Link href="/">계약서 업로드</Link>
        </Modal>
      )}
    </div>
  );
}
