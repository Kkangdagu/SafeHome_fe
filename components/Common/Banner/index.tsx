'use client';

import 'swiper/css';
import './banner.styles.css';

import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IHomePresenter } from '@/components/home/Home.types';

export default function Banner({ onBoarding }: IHomePresenter) {
  return (
    <Swiper
      pagination={{ type: 'fraction' }}
      modules={[Pagination]}
      loop
      className="h-[160px] rounded-md my-12">
      {onBoarding.body.map((v) => (
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
