import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IEditPageUIProps } from './EditPage.types';

export default function EditPagePresenter({
  deleteMember,
  editMember,
  onChangeBirthDate,
  onChangeEmail,
  onChangeName,
  onChangePhone,
  onChangePassword,
  onChangePasswordConfirm,
  name,
  email,
}: IEditPageUIProps) {
  const router = useRouter();
  return (
    <div className="w-[390px] h-screen bg-[#F2F3F6]">
      <div className="relative h-[106px] bg-white-0">
        <button
          onClick={() => {
            router.push('/myPage');
          }}>
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
        <button
          className="text-[#2551F4] text-[15px] absolute top-[65%] left-[85%] "
          onClick={editMember}>
          완료
        </button>
      </div>
      <div className="border-b-[2px] border-[#A6B3CD]" />
      <div className="w-[75px] h-[75px] rounded-[70%] overflow-hidden mx-auto mt-[40px]">
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
        <div className="ml-[20px] mb-[70px]">
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
              onChange={onChangeName}
              value={name}
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[70px]">
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
              onChange={onChangeBirthDate}
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[70px]">
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
              onChange={onChangePhone}
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[70px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            이메일
          </div>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              className="w-[349px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              readOnly
              placeholder="이메일 주소"
              onChange={onChangeEmail}
              value={email}
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[70px]">
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
              onChange={onChangePassword}
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[70px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            비밀번호 재설정 확인
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-[349px] h-[37px] text-[11px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="비밀번호는 8~16자의 숫자, 영문, 특수문자가 포함되어야 합니다."
              onChange={onChangePasswordConfirm}
            />
          </div>
        </div>
        <div className="text-right">
          <button
            className="mr-[25px] mt-[20px] text-[13px] text-[#B7B7B7] underline"
            onClick={deleteMember}>
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
}
