import Link from 'next/link';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import Button from '../Common/Button';
import Footer from '../Common/Footer';
import { IPolicyContainer } from './LatestPolicy.types';

export default function LatestPolicyUI({
  policy,
  page,
  prevBtn,
  nextBtn,
}: IPolicyContainer) {
  return (
    <div className="w-[390px] h-screen bg-layout-primary p-4 flex flex-col min-h-screen relative">
      <header className="flex flex-col mt-2 gap-10">
        <Link href="/" className="w-[28px] h-[28px] mt-3">
          <IoChevronBack />
        </Link>
        <h1 className="text-[32px] font-extrabold">최신 부동산 정책</h1>
      </header>
      <div className="border-t-2 border-b-2 border-slate-400 mt-10">
        {policy?.body.list.map((v, idx) => (
          <Link
            href={v.enterUrl}
            key={v.enterTitle}
            target="_blank"
            className={`flex bg-[#eef2ff] py-2 px-1 hover:bg-[#dbe3ff] ${idx !== 9 ? 'border-b-[1px] border-b-slate-300' : ''}`}>
            <p className="w-[90%] h-[30px] text-[16px] flex items-center">
              <span className="truncate">{v.enterTitle}</span>
            </p>
            <div className="w-[10%] h-[30px] flex justify-end items-center">
              <IoChevronForward />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-between">
        <Button
          type="button"
          variant="pagination"
          onClick={prevBtn}
          disabled={page === 0}>
          <IoChevronBack />
        </Button>
        {/* 여기에 만들예정 */}
        <Button type="button" variant="pagination" onClick={nextBtn}>
          <IoChevronForward />
        </Button>
      </div>
      <Footer />
    </div>
  );
}
