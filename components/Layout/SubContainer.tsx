import { PropsWithChildren } from 'react';

export default function SubContainer({ children }: PropsWithChildren) {
  return (
    <div className="container_height bg-blue-500 flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
