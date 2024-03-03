import Image from 'next/image';
import Link from 'next/link';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import Footer from '../Common/Footer';

export default function InquiryUI() {
  return (
    <div className="w-[390px] h-screen bg-layout-primary p-4 flex flex-col min-h-screen relative">
      <header className="h-[106px] flex items-end px-3 pb-5 justify-between border-b-2 border-b-slate-300 -mx-4 mb-20">
        <Link
          href="/"
          className="w-[32px] h-[32px] flex justify-center items-center">
          <IoChevronBack />
        </Link>
        <p className="text-[32px] font-bold">조회 및 열람</p>
        <div className="w-[32px] h-[32px]" />
      </header>
      <section className="flex flex-col gap-4">
        <p className="w-full text-[24px] text-[#696E83] font-bold flex items-center justify-between px-2">
          부동산 / 중개인 확인하기
          <IoChevronForward />
        </p>
        <Link
          href="https://www.vworld.kr/dtld/broker/dtld_list_s001.do"
          target="_blank"
          className="w-[358px] h-[190px] bg-white-0 border-2 rounded-md flex justify-center items-center relative">
          <Image
            src="/images/v_world_icon.svg"
            alt="vword"
            width={250}
            height={36}
          />
          <p className="text-[20px] text-slate-600 absolute bottom-3 left-5">
            #부동산#중개인
          </p>
        </Link>
      </section>
      <section className="flex flex-col gap-4 mt-10">
        <p className="w-full text-[24px] text-[#696E83] font-bold flex items-center justify-between px-2">
          등기부등본 열람하기
          <IoChevronForward />
        </p>
        <Link
          href="https://www.iros.go.kr/PMainJ.jsp"
          target="_blank"
          className="w-[358px] h-[190px] bg-white-0 border-2 rounded-md flex justify-center items-center relative">
          <Image
            src="/images/iros_icon.svg"
            alt="vword"
            width={250}
            height={80}
          />
          <p className="text-[20px] text-slate-600 absolute bottom-3 left-5">
            #등기부등본#매물확인
          </p>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
