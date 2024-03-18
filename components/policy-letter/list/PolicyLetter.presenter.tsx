'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { isLogin } from '@/utils/isLogin';

import { IPolicyLetterListUIProps } from './PolicyLetter.types';

export default function PolicyLetterListUI({
  letterList,
}: IPolicyLetterListUIProps) {
  const router = useRouter();
  return (
    <div className="w-[390px] h-full bg-[#F2F3F6] flex flex-col min-h-screen">
      <div className="relative w-[390px] h-[106px] bg-white-0">
        <button onClick={() => router.push('/')}>
          <Image
            src="/images/left_arrow.svg"
            width={14}
            height={26}
            alt=""
            className="absolute top-[60%] left-[5%]"
          />
        </button>
        <div className="text-black text-[24px] font-semibold absolute top-[58%] left-[28%]">
          부동산 정책 레터
        </div>
      </div>
      <div className="border-b-[2px] border-[#A6B3CD] mb-[20px]" />
      <button className=" w-[25px] mb-[25px] ml-auto mr-[15px]">
        <Image src="/images/filter.svg" alt="" width={24} height={19} />
      </button>

      {letterList[0]?.map((board: any) => (
        <div key={board.id} className="relative">
          <button
            onClick={() => {
              const body = {
                email: localStorage.getItem('userId'),
                realEstatePolicyLetterId: board.id,
              };
              if (board.memberId) {
                axios
                  .post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/re/bookmark/deleteOne`,
                    body,
                  )
                  .then((res) => {
                    if (res.status === 200) {
                      window.location.reload();
                    }
                  })
                  .catch((err) => {
                    return err;
                  });
              } else {
                axios
                  .post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/re/bookmark/saveOne`,
                    body,
                  )
                  .then((res) => {
                    if (res.status === 200) {
                      window.location.reload();
                    }
                  })
                  .catch((err) => {
                    return err;
                  });
              }
            }}
            className="absolute top-[5%] right-[10%] z-50">
            <Image
              src={
                board.memberId
                  ? '/images/bookmark.svg'
                  : '/images/bookmark_none.svg'
              }
              width={25}
              height={25}
              alt=""
              className={`${isLogin() ? 'block' : 'invisible'}`}
            />
          </button>
          <Link href={`/policy-letter/${board.id}`}>
            <div
              className="w-[341px] h-[223px] mb-[35px] bg-cover rounded-[16px] mx-auto relative"
              style={{ backgroundImage: `url(${board.thumbnailImgUrl})` }}>
              <div className="w-[341px] h-[72px] rounded-b-[16px] bg-white-0 bg-opacity-90 absolute bottom-0 ">
                <div className="ml-[13px] mt-[13px]">
                  <div className="text-[#0E298D] font-semibold  text-[20px] mb-[11px]">
                    {board.title}
                  </div>
                  <div className="text-[12px] text-[#686868]">
                    {board.lastChngRegDttm.substr(0, 10)}
                  </div>
                </div>
              </div>
              <div className="absolute text-[11px] top-[78%] left-[89%]">
                {board.author}
              </div>
              <div>
                <Image
                  src="/images/view_count.svg"
                  alt=""
                  width={10}
                  height={7}
                  className="absolute top-[90%] left-[89%]"
                />
                <div className="text-[8px] text-[#9AA0B7] absolute top-[90%] right-[6%]">
                  {board.viewCount}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
