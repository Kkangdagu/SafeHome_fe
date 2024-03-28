import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'login'
  | 'kakao'
  | 'google'
  | 'veri'
  | 'register'
  | 'pagination'
  | 'reset'
  | 'result';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariants;
}

const variants = {
  primary:
    'w-[356px] h-[49px] flex justify-center items-center rounded-md text-base bg-blue-0 text-white-0 disabled:bg-gray-0 disabled:text-gray-1',
  secondary:
    'w-[90px] h-[37px] flex justify-center items-center rounded-sm text-base bg-gray-0 text-gray-1',
  login:
    'w-[356px] h-[49px] flex justify-center items-center rounded-md text-base bg-[#696E83] text-white-0 disabled:bg-gray-0 disabled:text-gray-1',
  kakao:
    'w-[356px] h-[49px] flex justify-center items-center rounded-md text-base bg-[#FEE500] text-black',
  google:
    'w-[356px] h-[49px] flex justify-center items-center rounded-md text-base bg-white-0 text-black',
  veri: 'w-[90px] h-[37px] flex justify-center items-center text-[15px] text-white-0 bg-[#8B99BB] disabled:bg-[#CAD1E1] ',
  register:
    'w-[355px] h-[58px] bg-[#696E83] flex justify-center items-center rounded-md text-base text-white-0 disabled:bg-[#A6B3CD]',
  pagination: 'w-[26px] h-[26px] border border-slate-100',
  reset:
    'w-[150px] h-[44px] text-[20px] flex justify-center items-center bg-[#CAD1E1] text-white active:bg-[#8B99BB]',
  result:
    'w-[150px] h-[44px] text-[20px] flex justify-center items-center text-white bg-[#A6B3CD] active:bg-[#8B99BB]',
};

export default function Button({
  children,
  type,
  variant = 'primary',
  className,
  disabled,
  id,
  onClick,
}: IButton) {
  return (
    <button
      type={type}
      className={`${variants[variant]} ${className}`}
      disabled={disabled}
      id={id}
      onClick={onClick}>
      {children}
    </button>
  );
}
