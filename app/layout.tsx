import '@/styles/global.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import ReactQueryProviders from '@/utils/ReactQueryProvider';

import Providers from './StoreProvider';

export const metadata: Metadata = {
  title: '세집',
  description: '집을 구할 때 주의사항 및 체크리스트를 제공합니다.',
  icons: {
    icon: '/main_icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProviders>
      <Providers>
        <html lang="en">
          <body className="w-full h-full flex justify-center">{children}</body>
          <Script src="https://cdn.swygbro.com/public/widget/swyg-widget.js" />
        </html>
      </Providers>
    </ReactQueryProviders>
  );
}
