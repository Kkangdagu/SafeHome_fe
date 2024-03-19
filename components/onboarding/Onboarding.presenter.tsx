import Image from 'next/image';
import Link from 'next/link';

export default function OnboardingUI() {
  return (
    <div className="w-[390px] h-full bg-white-0 flex flex-col relative">
      <Link href="/" className="my-14 ml-8">
        <Image
          src="/images/onboarding_home_icon.svg"
          alt="홈 아이콘"
          width={27}
          height={27}
        />
      </Link>
      <div className="flex flex-col gap-2 ml-7">
        <span className="text-[15px] ml-2">집 계약할 때</span>
        <span className="w-[197px] h-[23px] tracking-widest bg-[#171D30] text-base text-white-0 flex items-center justify-center">
          똑똑한 소비자가 되려면?
        </span>
      </div>
      <div className="w-[202px] h-[73px] ml-6 mt-5">
        <Image
          src="/images/intro.svg"
          alt="온보딩 타이틀"
          width={198}
          height={133}
        />
      </div>
      <div className="absolute right-0 top-[160px]">
        <Image
          src="/images/onboarding_human.svg"
          alt="사람 캐릭터 이미지"
          width={147}
          height={221}
        />
      </div>
      <div className="w-full h-[163px] text-[18px] text-white-0 flex flex-col items-center justify-center bg-[#09184F] mt-[103px]">
        <span>세집 서비스를 시작하기 전,</span>
        <span className="mb-12">이것부터 알아보고 가요!</span>
      </div>
      <div className="w-full h-[540px] flex justify-center relative">
        <div className="w-[346px] h-[559px] bg-layout-primary absolute top-[-3rem] pt-10 px-8">
          <div className="flex justify-center items-start">
            <Image
              src="/images/onboarding_doc_icon.svg"
              alt="문서 아이콘"
              width={87}
              height={81}
            />
            <Image
              src="/images/onboarding_doc_text.svg"
              alt="텍스트"
              width={190}
              height={54}
              className="mt-6"
            />
          </div>
          <hr className="bg-black h-[1px] border-[0px]" />
          <div className="my-16 flex flex-col gap-10">
            <section className="h-[70px] flex items-center gap-7">
              <Link href="/commission">
                <Image
                  src="/images/onboarding_calc_icon.svg"
                  alt="온보딩 계산기"
                  width={64}
                  height={64}
                />
              </Link>
              <div className="flex flex-col gap-1">
                <span className="text-[18px] font-bold">중개수수료 계산기</span>
                <span className="text-[13px] mt-1">
                  집 조건에 맞는 중개수수료를 내가 직접
                </span>
                <span className="text-[13px]">
                  계산해 중개수수료 눈탱이 방지!
                </span>
              </div>
            </section>
            <section className="h-[70px] flex items-center gap-7">
              <Link href="/inquiry">
                <Image
                  src="/images/onboarding_search_icon.svg"
                  alt="온보딩 서치 아이콘"
                  width={64}
                  height={64}
                />
              </Link>
              <div className="flex flex-col gap-1">
                <span className="text-[18px] font-bold">정보 조회 및 열람</span>
                <span className="text-[13px] mt-1">
                  안전한 부동산과 공인중개사인지를 직접
                </span>
                <span className="text-[13px]">
                  조회, 매물의 등기부등본을 직접 확인!
                </span>
              </div>
            </section>
            <section className="h-[70px] flex items-center gap-7">
              <Link href="/analysis">
                <Image
                  src="/images/onboarding_upload_icon.svg"
                  alt="온보딩 업로드 아이콘"
                  width={64}
                  height={64}
                />
              </Link>
              <div className="flex flex-col gap-1">
                <span className="text-[18px] font-bold">계약서 업로드</span>
                <span className="text-[13px] mt-1">
                  계약하는 계약서의 이미지를 업로드해
                </span>
                <span className="text-[13px]">
                  사인하기 전 미리 주의해야할 점을 인지!
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="h-[1136px]">
        <Image
          src="/images/onboarding_main.svg"
          alt="메인"
          width={390}
          height={1136}
        />
      </div>
      <div className="h-5" />
      <div className="h-[416px] bg-layout-primary">
        <Image src="/images/need.svg" alt="필수" width={390} height={416} />
      </div>
      <div className="h-[340px] flex flex-col items-center">
        <Image
          src="/images/text_now.svg"
          alt="필수"
          width={215}
          height={70}
          className="my-16"
        />
        <Image
          src="/images/onboarding_logo.svg"
          alt="로고"
          width={182}
          height={108}
        />
      </div>
      <div className="h-[98px] bg-[#6C9BF2] text-[13px] text-white-0 flex flex-col items-center">
        <span className="mt-7">개인정보처리 방침ㅣ이용약관ㅣ고객문의</span>
      </div>
    </div>
  );
}
