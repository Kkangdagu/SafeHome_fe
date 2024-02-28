import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariants = 'primary' | 'secondary';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariants;
}

const variants = {
  primary:
    'w-[356px] h-[49px] flex justify-center items-center rounded-md text-base bg-blue-0 text-white-0 disabled:bg-gray-0 disabled:text-gray-1',
  secondary:
    'w-[90px] h-[37px] flex justify-center items-center rounded-sm text-base bg-gray-0 text-gray-1',
};

export default function Button({
  children,
  type,
  variant = 'primary',
  className,
  disabled,
  onClick,
}: IButton) {
  return (
    <button
      type={type}
      className={`${variants[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
}
