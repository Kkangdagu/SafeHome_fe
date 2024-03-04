import Image from 'next/image';

export default function EditPagePresenter() {
  return (
    <div className="w-[390px] h-[100%] bg-[#F2F3F6]">
      <div className="relative h-[106px] bg-white-0">
        <button>
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
    </div>
  );
}
