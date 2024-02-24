import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-[50px] bg-blue-500 flex items-center justify-between">
      <div>
        <Link href="/">로고위치</Link>
      </div>
      <div>
        <Link href="/analysis">이미지 업로드</Link>
      </div>
    </header>
  );
}
