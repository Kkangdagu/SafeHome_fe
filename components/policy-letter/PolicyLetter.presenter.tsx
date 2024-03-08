import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PolicyLetterUI() {
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
          부동산 정책 레터
        </div>
      </div>
      <div className="border-b-[2px] border-[#A6B3CD]" />
    </div>
  );
}
