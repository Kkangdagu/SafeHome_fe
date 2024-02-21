import { CSSProperties, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit';
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  type,
  backgroundColor,
  color,
  onClick,
}: ButtonProps) {
  const buttonStyle: CSSProperties = {
    backgroundColor,
    color,
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      className="w-[168px] h-[48px] flex justify-center items-center border rounded-3xl"
      onClick={onClick}>
      {children}
    </button>
  );
}
