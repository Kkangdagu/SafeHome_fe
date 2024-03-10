import Image from 'next/image';
import Link from 'next/link';

import { IPolicyLetterDetailUIProps } from './PolicyLetterDetail.types';

export default function PolicyLetterDetailPresenter({
  letterDetail,
}: IPolicyLetterDetailUIProps) {
  return (
    <div className="w-[390px] h-full bg-[#F2F3F6] flex flex-col min-h-screen">
      <div
        className="h-[302px] bg-[#0E298D] relative text-white-0 bg-cover"
        style={{ backgroundImage: `url(${letterDetail?.contentImgUrl})` }}>
        <Link href="/policy-letter">
          <Image
            src="/images/back_icon.svg"
            width={24}
            height={22}
            alt=""
            className="absolute top-[9%] left-[5%]"
          />
        </Link>

        <div className="font-extrabold text-[40px] text-center mt-[180px]">
          {letterDetail?.title}
        </div>
        <div className="text-[16px] absolute top-[90%] left-[5%]">
          작성자 : {letterDetail?.author}
        </div>
        <div className="text-[16px] absolute top-[90%] left-[75%]">
          {letterDetail?.lastChngRegDttm.substr(0, 10)}
        </div>
      </div>
      <div>.</div>
    </div>
  );
}
