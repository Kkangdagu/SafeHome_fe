import { PropsWithChildren } from 'react';

export default function MainContainer({ children }: PropsWithChildren) {
  return <main className="w-full max-w-[690px] h-full">{children}</main>;
}
