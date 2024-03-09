import Image from 'next/image';
import Link from 'next/link';

export default function PolicyLetterDetailPresenter() {
  return (
    <div className="w-[390px] h-full bg-[#F2F3F6] flex flex-col min-h-screen">
      <div className="h-[302px] bg-[#0E298D] relative text-white-0">
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
          제목
        </div>
        <div className="text-[16px] absolute top-[90%] left-[5%]">
          작성자 : 관리자
        </div>
        <div className="text-[16px] absolute top-[90%] left-[75%]">
          2024-00-00
        </div>
      </div>
      <div>내용ㅇ내용내용ㅇ아아아아ㅏㅏㅏㅏㅏㅏ</div>
    </div>
  );
}
