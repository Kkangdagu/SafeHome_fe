import Image from 'next/image';
import Link from 'next/link';

import PolicyLetterSkeleton from '@/components/Common/Skeleton/PolicyLetter';

import { IHomeLetterProps } from './Home.types';

export default function HomeLetterPresenter({ data }: IHomeLetterProps) {
  if (!data?.body) {
    return <PolicyLetterSkeleton />;
  }

  return (
    <div className="h-[140px] mt-[30px] mb-5 flex gap-5">
      {data?.body?.map((list) => (
        <Link
          id="policy-letter"
          key={list.id}
          href={`/policy-letter/${list.id}`}>
          <div className="w-[85px] h-[85px] rounded-[50%]">
            <Image
              src={list.thumbnailImgUrl}
              alt="정책 이미지"
              width={85}
              height={85}
              className="w-[85px] h-[85px] rounded-[50%]"
            />
          </div>
          <div className="w-[90px] font-extrabold text-[15px] text-[#0E298D] mt-4">
            {list.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
