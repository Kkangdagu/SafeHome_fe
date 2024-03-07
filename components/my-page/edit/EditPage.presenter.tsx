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
          프로필 수정
        </div>
        <button className="text-[#2551F4] text-[15px] absolute top-[60%] left-[85%] border-solid border-[1px] p-[2px] border-[#2551F4]">
          <div>완료</div>
        </button>
      </div>
      <div className="border-b-[2px] border-[#A6B3CD]" />
      <div className="text-right">
        <button className="mr-[25px] mt-[23px] text-[13px] text-[#B7B7B7] underline">
          탈퇴하기
        </button>
      </div>
      <div className="w-[75px] h-[75px] rounded-[70%] overflow-hidden mx-auto mt-[20px]">
        <Image
          src="/images/profile.svg"
          width={75}
          height={75}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
        <Image src="images/profile.svg" width={75} height={75} alt="" />
      </div>
      <div className="mt-[60px]">
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            이름
          </div>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="w-[349px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="이름"
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            생년월일
          </div>
          <div>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className="w-[349px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="생년월일"
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            전화번호
          </div>
          <div>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-[349px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="010-0000-0000"
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            이메일
          </div>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              className="w-[349px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="이메일 주소"
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[100px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            비밀번호 재설정
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-[349px] h-[37px] text-[11px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="비밀번호는 8~16자의 숫자, 영문, 특수문자가 포함되어야 합니다."
            />
          </div>
        </div>
        <div className="w-[120px] h-[30px] mx-auto">
          <button className="relative">
            <div className="text-[20px] text-[#2551F4] inline-block">
              로그아웃
            </div>
            <Image
              src="/images/logout_icon.svg"
              alt=""
              width={22}
              height={24}
              className="inline-block absolute left-[110%] top-[9%]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
