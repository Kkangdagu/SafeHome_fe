import Image from 'next/image';
import Link from 'next/link';

import Footer from '../Common/Footer';
import Header from '../Common/Header';

export default function InquiryUI() {
  return (
    <div className="w-[390px] h-screen bg-white-0 p-4 flex flex-col min-h-screen relative">
      <Header text="조회 및 열람" href="/" />
      <section className="flex flex-col gap-4 mt-5">
        <Link
          href="https://www.vworld.kr/dtld/broker/dtld_list_s001.do"
          target="_blank"
          className="w-[352px] h-[214px]">
          <Image
            src="/images/vword_image.svg"
            alt="vword"
            width={352}
            height={214}
          />
        </Link>
      </section>
      <section className="flex flex-col gap-4 mt-10">
        <Link
          href="https://www.iros.go.kr/PMainJ.jsp"
          target="_blank"
          className="w-[352px] h-[214px]">
          <Image
            src="/images/ko_img.svg"
            alt="vword"
            width={352}
            height={214}
          />
        </Link>
      </section>
      <Footer />
    </div>
  );
}
