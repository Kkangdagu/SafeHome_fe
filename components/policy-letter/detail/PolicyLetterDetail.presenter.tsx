import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { isLogin } from '@/utils/isLogin';

import { IPolicyLetterDetailUIProps } from './PolicyLetterDetail.types';

export default function PolicyLetterDetailPresenter({
  letterDetail,
}: IPolicyLetterDetailUIProps) {
  const [bookmark, setBookmark] = useState(false);
  const changeCheck = () => {
    setBookmark((current) => !current);
  };
  useEffect(() => {
    if (isLogin()) {
      if (letterDetail?.bookMarkYn === 'Y') {
        setBookmark(true);
      } else if (letterDetail?.bookMarkYn === 'N') {
        setBookmark(false);
      }
    }
  }, []);

  return (
    <div className="w-[390px] h-full flex flex-col relative">
      <img src={letterDetail?.contentImgUrl} alt="" />

      <Link href="/policy-letter">
        <Image
          src="/images/back_icon.svg"
          width={24}
          height={22}
          alt=""
          className="absolute top-[1%] left-[5%]"
        />
      </Link>

      <div className="font-extrabold text-white-0 absolute top-[6%] left-[6%] text-[40px] text-center">
        {letterDetail?.title}
      </div>
      <div className="text-[16px] text-white-0 absolute top-[9.5%] left-[5%]">
        작성자 : {letterDetail?.author}
      </div>
      <div className="text-[16px] absolute text-white-0 top-[9.5%] right-[5%]">
        {letterDetail?.lastChngRegDttm.substr(0, 10)}
      </div>
      <button
        onClick={() => {
          const body = {
            email: localStorage.getItem('userId'),
            realEstatePolicyLetterId: letterDetail?.id,
          };
          if (bookmark) {
            changeCheck();
            axios
              .post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/re/bookmark/deleteOne`,
                body,
              )
              .then((res) => {
                if (res.status === 200) {
                  setBookmark(false);
                }
              })
              .catch((err) => {
                return err;
              });
          } else {
            changeCheck();
            axios
              .post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/re/bookmark/saveOne`,
                body,
              )
              .then((res) => {
                if (res.status === 200) {
                  setBookmark(true);
                }
              })
              .catch((err) => {
                return err;
              });
          }
        }}>
        <Image
          src={bookmark ? '/images/bookmark.svg' : '/images/bookmark_none.svg'}
          width={25}
          height={25}
          className={`absolute top-[1%] right-[5%] ${isLogin() ? 'block' : 'invisible'}`}
          alt=""
        />
      </button>
    </div>
  );
}
