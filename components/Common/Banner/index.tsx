'use client';

import 'swiper/css';
import './banner.styles.css';

import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { onGetOnboarding } from '@/service/home/useHomeService';

interface IOnboarding {
  lastChngRegDttm: string;
  thumbnailImgUrl: string;
}

export default function Banner() {
  const { data, isError } = onGetOnboarding();

  if (isError) {
    // eslint-disable-next-line no-alert
    alert(data.head.resultMsg);
  }

  return (
    <Swiper
      pagination={{ type: 'fraction' }}
      modules={[Pagination]}
      loop
      className="h-[160px] rounded-md my-12">
      {data?.body.map((v: IOnboarding) => (
        <SwiperSlide key={v.lastChngRegDttm}>
          <Link href="/onboarding">
            <Image
              src={v.thumbnailImgUrl}
              alt="정책 이미지"
              width={358}
              height={160}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
