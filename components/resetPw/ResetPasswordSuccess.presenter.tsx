import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ResetPasswordSuccessUI() {
  const router = useRouter();
  return (
    <div className="w-[390px] h-screen bg-[#F2F3F6] text-center">
      <div className="mx-auto mt-[273px] mb-[65px] w-[330px] h-[238px] rounded-[10px] bg-[#D3D8F3]">
        <div className="pt-[45px]">
          <Image
            src="/images/check_icon.svg"
            width={55}
            height={55}
            alt=""
            className="mx-auto"
          />
        </div>

        <div className="text-center text-[16px] mt-[33px] text-[#696E83] leading-[30px]">
          이메일로 임시 번호가 발송되었습니다.
          <br />
          로그인 후 비밀번호를 변경해주시길 바랍니다.
        </div>
      </div>
      <button
        onClick={() => {
          router.push('/');
        }}
        className="w-[154px] h-[44px] mr-[11px] bg-[#CAD1E1] text-[20px] text-white-0 inline-block">
        홈으로 이동
      </button>
      <button
        onClick={() => {
          router.push('/login');
        }}
        className="w-[154px] h-[44px] ml-[11px] bg-[#696E83] text-[20px] text-white-0 inline-block">
        로그인
      </button>
    </div>
  );
}
