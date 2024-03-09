'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Footer from '../Common/Footer';
import { IMyPageUIProps } from './MyPage.types';

export default function MyPageUI({ email, name }: IMyPageUIProps) {
  const router = useRouter();
  return (
    <div className="w-[390px] p-4 h-screen bg-[#F2F3F6] flex flex-col min-h-screen">
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
        <div className="text-black text-[24px] font-semibold absolute top-[58%] left-[35%]">
          마이페이지
        </div>
      </div>
      <div className="border-b-[2px] border-[#A6B3CD]" />
      <div className="w-[340px] h-[100px] mx-auto mt-[83px] relative">
        <div className="inline-block">
          <div className="mx-auto">
            <div className="inline-block text-[28px] font-semibold">{name}</div>
            <button
              className="ml-[10px]"
              onClick={() => {
                router.push('/myPage/edit');
              }}>
              <Image
                src="/images/edit_icon.svg"
                width={22.5}
                height={24.75}
                alt=""
              />
            </button>
          </div>
          <div className="mt-[20px] text-[15px] text-[#696E83]">{email}</div>
        </div>
        <div className="w-[75px] h-[75px] rounded-[70%] overflow-hidden absolute top-[-9%] left-[75%] ">
          <Image
            src="images/profile.svg"
            width={75}
            height={75}
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
      <div className=" mx-auto w-[348px] h-[113px] rounded-[10px] bg-[#E9EBF8] relative mb-[42px]">
        <button className="absolute top-[20%] left-[15%]">
          <Image
            src="images/bookmark_icon.svg"
            width={28.33}
            height={44.16}
            alt=""
          />
        </button>
        <div className="text-[15px] text-[#696E83] absolute top-[67%] left-[13%]">
          북마크
        </div>
        <button className="absolute top-[25%] right-[20%]">
          <Image
            src="images/call_icon.svg"
            width={33.68}
            height={33.68}
            alt=""
          />
        </button>
        <div className="text-[15px] text-[#696E83] absolute top-[67%] right-[17%]">
          고객문의
        </div>
      </div>
      <div className=" mx-auto w-[348px] h-[auto] rounded-[10px] bg-[#E9EBF8] relative">
        <div className="text-[23px] pl-[16px] pt-[22px]">
          계약서 업로드 내역
        </div>
        <Image
          src="images/contract_icon.svg"
          width={76}
          height={106}
          alt=""
          className="mx-auto mt-[44px]"
        />
        <div className="w-[220px] mx-auto mt-[24px] pb-[42px] text-[#696E83] text-[16px]">
          계약서 업로드 내역이 없습니다.
        </div>
      </div>
      <Footer />
    </div>
  );
}
