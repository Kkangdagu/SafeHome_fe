/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getPolicyLetter } from '@/utils/home';

export default function PolicyLetterListContainer() {
  const [letterList, setLetterList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const letterData = await getPolicyLetter();
      setLetterList(letterData.body);
    };
    fetchData();
  }, []);

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
      <div className="border-b-[2px] border-[#A6B3CD] mb-[56px]" />
      {letterList.map((board: any) => (
        <Link key={board.id} href={`/policy-letter/${board.id}`}>
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
          </div>
        </Link>
      ))}
    </div>
  );
}
