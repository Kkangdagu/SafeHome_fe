import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-full bg-blue-500 flex justify-between">
      <div>
        <Link href="/">로고위치</Link>
      </div>
      <div>
        <Link href="/analysis">이미지 업로드</Link>
      </div>
    </header>
  );
}
