import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';

interface IHeaderProps {
  text: string;
  href: string;
}

export default function Header({ text, href }: IHeaderProps) {
  return (
    <header className="h-[106px] flex items-end px-3 pb-5 justify-between border-b-2 bg-white-0 border-b-slate-300 -mx-4 -mt-4 mb-5">
      <Link
        href={href}
        className="w-[24px] h-[24px] flex justify-center items-center">
        <IoChevronBack />
      </Link>
      <p className="text-[22px] font-medium">{text}</p>
      <div className="w-[28px] h-[28px]" />
    </header>
  );
}
